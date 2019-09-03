const PORT = process.env.PORT || 3001;
const DB_CONNECTION_URL = "mongodb://localhost:27017/controleponto";
const DOMAIN_URL = "localhost";
const PROTOCOL_URL = "http";
const BASE_URL = `${PROTOCOL_URL}://${DOMAIN_URL}:${PORT}`;

module.exports = {
  DB_CONNECTION_URL,
  DOMAIN_URL,
  PROTOCOL_URL,
  BASE_URL,
  PORT
};
