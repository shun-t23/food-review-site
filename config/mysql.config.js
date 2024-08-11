module.exports = {
  HOST: process.env.MYSQL_HOST || '127.0.0.1',
  PORT: process.env.MYSQL_PORT || '3306',
  USERNAME: process.env.MYSQL_USERNAME,
  PASSWORD: process.env.MYSQL_PASSWORD,
  DATABASE: process.env.MYSQL_DATABASE || 'tastylog',
};
