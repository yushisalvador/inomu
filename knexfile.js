require("dotenv").config({
  path: "./.env",
});

// module.exports = {
//   development: {
//     client: "pg",
//     connection: process.env.DATABASE_URL || {
//       database: process.env.DB_NAME,
//       port: process.env.DB_PORT || 8080,
//       user: process.env.DB_USER,
//       password: process.env.DB_PASSWORD,
//     },
//     migrations: {
//       directory: "./server/db/migrations",
//     },
//     seeds: { directory: "./server/db/seeds" },
//   },
//   production: {
//     client: "pg",
//     connection: {
//       connectionString: process.env.DATABASE_URL,
//       ssl: { rejectUnauthorized: false },
//     },
//     migrations: {
//       directory: "./server/db/migrations",
//     },
//     seeds: { directory: "./server/db/seeds" },
//   },
// };

module.exports = {
  client: "pg",
  connection: process.env.DATABASE_URL || {
    port: process.env.DB_PORT || 8080,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
  migrations: {
    directory: "./server/db/migrations",
  },
  seeds: {
    directory: "./server/db/seeds",
  },
};
