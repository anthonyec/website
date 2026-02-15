module.exports = {
  url: (process.env.context === 'production' ? process.env.URL : process.env.DEPLOY_PRIME_URL) || 'http://localhost:8082',
  title: 'Anthony Cossins',
  description:
    'Anthony Cossins has a website on the internet and this is it.',
  keywords: 'just, a, great, guy',
  timestamp: () => Date.now(),
  date: () => new Date()
}
