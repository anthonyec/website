const fs = require('fs');
const path = require('path');

module.exports = {
  env: {
    dev: process.env.NODE_ENV === 'dev'
  },

  site: {
    url: 'https://anthonycossins.com',
    title: 'Anthony Cossins',
    description:
      'Anthony Cossins has a website on the internet and this is it.',
    timestamp: () => Date.now(),
    date: () => new Date()
  },

  getPageVariables(site, page) {
    const formattedTitle = page.title
      ? `${page.title} — ${site.title}`
      : site.title;
    const url = page.slug ? path.join(site.url, page.slug) : site.url;

    return {
      formattedTitle,
      url
    };
  },

  async getPages({ collection, redirects }) {
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
      },
      {
        slug: 'feed.xml',
        path: '/',
        content: fs.readFileSync('./src/feed.xml', 'utf8')
      }
    ];

    const oldPageRedirects = await redirects({
      // Work pages that have moved to posts.
      '/work/dashboard': '/posts/improving-car-dashboards-slightly',
      '/work/findbot': '/posts/findbot-case-study',
      '/work/conference': '/posts/ubs-conference-case-study',
      '/work/totaljobs': '/posts/total-jobs-case-study',

      // Outbound links.
      '/redirects/london-creative-coding':
        'https://www.meetup.com/london-creative-coding/',
      '/redirects/robot-oracles':
        'http://www.fullstopnewparagraph.co.uk/client/robots/',
      '/redirects/handicons': 'https://www.instagram.com/handicons/',
      '/redirects/gnormanperry': 'https://www.instagram.com/gnormanperry/',
      '/redirects/bigscreen': 'https://github.com/anthonyec/bigscreen'
    });


    return [...posts.reverse(), ...standalone, ...oldPageRedirects]
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
  },

  // Helper functions.
  formatDate: () => (text, render) => {
    function formatDateWithTemplate(template, date) {
      var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':');
      date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4);
      return date.toISOString().split(/[-:.TZ]/).reduce(function(template, item, i) {
        return template.split(specs[i]).join(item);
      }, template);
    }

    const renderedDate = render(text);
    const date = new Date(renderedDate);

    return formatDateWithTemplate('YYYY-MM-DD', date);
  },
  formatDateAsUTC: () => (text, render) => {
    const renderedDate = render(text);
    const date = new Date(renderedDate);

    return date.toUTCString();
  },
  removeH1: () => (text, render) => {
    const renderedText = render(text);

    return renderedText.replace(/<h1>.*(?:<a.*>.*<\/a>).*<\/h1>/g, '');
  }
};
