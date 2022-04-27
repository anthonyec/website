const { getCollectionFromFS } = require('staticbuild');

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

    // const t = JSON.stringify(posts, null, 2);

    // console.log(t);

    return [
      ...posts
    ]
  },

  getAssets: async () => {}
};
