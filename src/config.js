const fs = require('fs');
const path = require('path');

module.exports = {
  async getPages({ collection  }) {
    const posts = await collection(
      'posts',
      'post',
      './src/_posts',
      '/posts/{{slug}}'
    );
    const standalone = [
      {
        slug: '404.html',
        path: '/',
        content: fs.readFileSync('./src/404.html', 'utf8')
      },
      {
        slug: 'wechat.html',
        path: '/',
        content: fs.readFileSync('./src/wechat.html', 'utf8')
      },
      {
        slug: 'humans.txt',
        path: '/',
        content: fs.readFileSync('./src/humans.txt', 'utf8')
      },
      {
        slug: 'index.html',
        path: '/',
        content: fs.readFileSync('./src/index.html', 'utf8')
      }
    ];

    return [...posts, ...standalone]
  },
  postBuild: async () => {
    // TODO: Make this less hacky!
    fs.cpSync(path.join('./src', 'assets'), path.join('./dist', 'assets'), {
      recursive: true
    });

    fs.cpSync(path.join('./src', 'v'), path.join('./dist', 'v'), {
      recursive: true
    });

    fs.cpSync(path.join('./src', 'google0290ed350f9faa96.html'), path.join('./dist', 'google0290ed350f9faa96.html'));
    fs.cpSync(path.join('./src', 'cv_2019.pdf'), path.join('./dist', 'cv_2019.pdf'));
    fs.cpSync(path.join('./src', 'cv_2021.pdf'), path.join('./dist', 'cv_2021.pdf'));
    fs.cpSync(path.join('./src', 'cv.pdf'), path.join('./dist', 'cv.pdf'));
    fs.cpSync(path.join('./src', 'favicon.png'), path.join('./dist', 'favicon.png'));
    fs.cpSync(path.join('./src', 'favicon.ico'), path.join('./dist', 'favicon.ico'));
  }
};
