module.exports = {
  async getPages({ collection }) {
    const posts = await collection(
      'posts',
      'post',
      './src/_posts',
      '/posts/{{slug}}'
    );

    return [...posts]
  }
};
