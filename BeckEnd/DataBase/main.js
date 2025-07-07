const mariadb = require("mariadb");

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Appcino@123',
    database: 'nodedb'
})

async function main(params) {
    try{
        let conn = await pool.getConnection();
        // let rows = await conn.query("Insert INTO customers (name, address) VALUES ('Coca Cola', 'Wall Street')");
        // let rows = await conn.query("Select * From customers");
        // let rows = await conn.query("Update customers SET name = 'Rohan' Where name ='Coca Cola'");
        // let result = await conn.query("Select * From customers");
        console.log(result)
    } 
    catch(err){
        console.log(err)
    }
}

main();