const fs = require('fs');
const {
  getCollectionFromFS,
  getAssetsFromFS,
  getRedirectsFromMap
} = require('staticbuild');

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
    data: './src/_data'
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

    const redirects = getRedirectsFromMap({
      outputDirectory: './dist/',
      redirects: {
        // Work pages that have moved to posts.
        '/work/dashboard': '/posts/improving-car-dashboards-slightly',
        '/work/findbot': '/posts/findbot-case-study',
        '/work/conference': '/posts/ubs-conference-case-study',
        '/work/totaljobs': '/posts/total-jobs',
        '/cv': `/anthony_cossins_cv_2022.pdf?c=${Date.now()}`,

        // Outbound links.
        '/redirects/london-creative-coding':
        'https://www.meetup.com/london-creative-coding/',
        '/redirects/robot-oracles':
        'http://www.fullstopnewparagraph.co.uk/client/robots/',
        '/redirects/handicons': 'https://www.instagram.com/handicons/',
        '/redirects/gnormanperry': 'https://www.instagram.com/gnormanperry/',
        '/redirects/bigscreen': 'https://github.com/anthonyec/bigscreen'
      }
    });

    return [
      ...posts.reverse(),
      ...standalone,
      ...redirects
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
        './src/404.html',
        './src/cv.pdf'
      ]
    });

    const cv = {
      filename: 'cv.pdf',
      inputPath: './src/cv.pdf',
      outputPath: './dist/anthony_cossins_cv_2022.pdf'
    };

    return [...assets, cv];
  }
};
