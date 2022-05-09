const path = require('path');

module.exports = (globals) => {
  const { data: { site }, page } = globals;

  const formattedTitle = page.title
    ? `${page.title} — ${site.title}`
    : site.title;

  const url = page.url ? path.join(site.url, page.url) : site.url;

  const twitterSocialImage = page.twitterSocialImage ?
    path.join(url, page.twitterSocialImage) :
    path.join(site.url, './assets/images/twitter_social_image.png');

  return {
    formattedTitle,
    url,
    twitterSocialImage
  };
}
