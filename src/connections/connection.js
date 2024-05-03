const sql = require("mysql")

const connection=sql.createConnection(process.env.DB)
connection.connect((err)=>{
    if (err) throw err;
    console.log('db connected')
})



module.exports=connection;

