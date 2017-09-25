export default {
  PORT: process.env.PORT || 3000,
  DB_URL: 'mongodb://admin:admin@ds127894.mlab.com:27894/tweet-clone-graphql',
  GRAPHQL_PATH: '/graphql',
  JWT_SECRET: 'somesecretsauce123',
  SUBSCRIPTIONS_PATH: '/subscriptions',
}
