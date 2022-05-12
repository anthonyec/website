const path = require('path');
const fs = require('fs');
const { getCollectionFromFS, getAssetsFromFS } = require('staticbuild');

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
        './src/_redirects',
        './src/index.html',
        './src/feed.xml',
        './src/404.html'
      ]
    });

    return [...assets];
  }
};
