const env = process.env.NODE_ENV;
const config = require(`./env/${env.trim()}.json`);

if (!config) {
  throw new Error('Config for current environment not found');
}

module.exports = {
  port: config.port,
  dbConnectionString: config.db.main.connection,
  sequelizeOptions: {
    logging: false
  }
};
