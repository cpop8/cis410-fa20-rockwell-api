const sql = require('mssql')
const rockwellConfig = require('./config.js')

const config = {
    user: rockwellConfig.DB.user,
    password: rockwellConfig.DB.password,
    server: rockwellConfig.DB.server,
    database: rockwellConfig.DB.database,
}

    async function executeQuery(aQuery){
        var connection = await sql.connect(config)
        var result = await connection.query(aQuery)
    
        return result.recordset
    }

    module.exports = {executeQuery: executeQuery}
    //executeQuery(`SELECT * 
    //FROM movie 
    //LEFT JOIN genre 
    //ON genre.genrePK = movie.GenreFK`)