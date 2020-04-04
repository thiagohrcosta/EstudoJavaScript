const { Pool } = require("pg")

module.exports = new Pool({
    user: "postgree",
    password: "postgree2020",
    host: "localhost",
    port: 5432,
    database: "gymmanager"
})