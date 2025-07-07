const mariadb = require('mariadb')

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Appcino@123',
    database: 'nodedb'
});
