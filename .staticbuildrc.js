const path = require('path');
const fs = require('fs');
const { getCollectionFromFS, getAssetsFromFS } = require('staticbuild');

// Doing this with regex is pretty bad. It could accidentally convert code
// samples as it isn't exclusive to image tags. A better way to do this would be
// to parse the HTML.
function convertRelativeSourceToAbsolute(path, content) {
  const srcAttributeRegex = /src="(.*?)"/g;
  const httpAtStartRegex = /^https?:\/\//;

  return content.replaceAll(srcAttributeRegex, (originalAttributeWithPath, relativePath) => {
    const isAbsolutePath = relativePath.match(httpAtStartRegex) !== null;

    if (isAbsolutePath) {
      return originalAttributeWithPath;
    }

    return `src="${path}/${relativePath}"`;
  });
}

function getPostsWithContentForFeed(posts) {
  return [...posts].reverse().map((post) => {
    return {
      ...post,
      content: convertRelativeSourceToAbsolute(post.url, post.content)
    }
  })
}

module.exports = {
  directories: {
    layouts: './src/_layouts',
    partials: './src/_partials',
    functions: './src/_functions',
    data: './src/_data',
    hooks: './src/_hooks',
  },

  getPages: async () => {
    const posts = await getCollectionFromFS({
      name: 'posts',
      defaultLayout: 'post',
      inputDirectory: './src/_posts',
      outputDirectory: './dist/posts/{{slug}}',
    });

    const standalone = [
      {
        title: '',
        content: fs.readFileSync('./src/index.html', 'utf8'),
        inputPath: './src/index.html',
        outputPath: './dist/index.html'
      },
      {
        title: '404',
        content: fs.readFileSync('./src/404.html', 'utf8'),
        inputPath: './src/404.html',
        outputPath: './dist/404.html'
      },
      {
        title: '',
        content: fs.readFileSync('./src/feed.xml', 'utf8'),
        inputPath: './src/feed.xml',
        outputPath: './dist/feed.xml',
        postsAsFeed: getPostsWithContentForFeed(posts)
      }
    ];

    return [
      ...posts.reverse(),
      ...standalone
    ]
  },

  getAssets: async () => {
    const assets = await getAssetsFromFS({
      inputDirectory: './src',
      outputDirectory: './dist',
      ignorePathsAndDirectories: [
        './src/_layouts',
        './src/_partials',
        './src/_functions',
        './src/_data',
        './src/_hooks',
        './src/_posts',
        './src/index.html',
        './src/feed.xml',
        './src/404.html'
      ]
    });

    return [...assets];
  }
};
