module.exports = {
  redirects: {
    // Work pages that have moved to posts.
    '/work/dashboard': '/posts/improving-car-dashboards-slightly',
    '/work/findbot': '/posts/findbot-case-study',
    '/work/conference': '/posts/ubs-conference-case-study',
    '/work/totaljobs': '/posts/total-jobs',

    // Outbound links.
    '/redirects/london-creative-coding':
    'https://www.meetup.com/london-creative-coding/',

    '/redirects/robot-oracles':
    'https://web.archive.org/web/20220129014038/http://www.fullstopnewparagraph.co.uk/client/robots/',
    
    '/redirects/handicons': 'https://www.instagram.com/handicons/',
    '/redirects/gnormanperry': 'https://www.instagram.com/gnormanperry/',
    '/redirects/bigscreen': 'https://github.com/anthonyec/bigscreen',
    '/posts': '/#posts',

    "/snippets": "https://github.com/anthonyec/snippets",
    "/stuff/bluehouse": "https://github.com/anthonyec/bluehouse",
  },
  
  copies: [
    "./_redirects",
    "./favicon.ico",
    "./v",
  ]
}
