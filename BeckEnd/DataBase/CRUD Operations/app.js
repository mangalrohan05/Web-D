const mariadb = require('mariadb')

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Appcino@123',
    database: 'nodedb'
});


async function createUser(name, roll, batch) {
    let conn;
    try{
        conn = await pool.getConnection();
        const upd = await conn.query(`Insert into users VALUES ('rohan', 2, "X")`)
        const result = await conn.query('Select * From users');
        console.log(result)
    }
    catch(err){
        console.log(err)
    }
}

createUser('xx', 2, 'X');



