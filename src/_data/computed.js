const path = require('path');

module.exports = (templateGlobals) => {
  const { data: { site }, page } = templateGlobals;

  const formattedTitle = page.title
    ? `${page.title} — ${site.title}`
    : site.title;

  const url = page.slug ? path.join(site.url, page.slug) : site.url;

  const twitterSocialImage = page.twitterSocialImage ?
    path.join(url, page.twitterSocialImage) :
    path.join(site.url, './assets/images/twitter_social_image.png');

  return {
    formattedTitle,
    url,
    twitterSocialImage
  };
}
