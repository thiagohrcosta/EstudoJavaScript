const { Pool } = require("pg")

module.exports = new Pool({
    user: 'postgres',
    password: "123456postgre",
    host: "localhost",
    port: 5432,
    database: "launchstoredb"
})