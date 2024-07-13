const mysql = require('mysql2');
const express = require('express');
const cors = require('cors')

// 创建mysql连接
// const connection = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     password: '123456',
//     database: 'mydatabase'
// })
const connection = mysql.createConnection({
    host: 'bcj9v33vos2zxbjluoar-mysql.services.clever-cloud.com',
    user: 'uoqxaoysmowqhcyc',
    password: 'Xr4eBBBsRawFAe5JU5uT',
    database: 'bcj9v33vos2zxbjluoar'
})
connection.connect((err)=>{
    if(err) {
        console.log('err', err);
    }else{
        console.log('connection success');
    }
})
const app = express();
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    connection.query('select * from user',(err, data) => {
        if(err) {
            res.send(err);
        }else{
            res.send(data)
        }
    })
})

app.get('/age/:age', (req, res) => {
    //  ? 为占位符  一个？ 表示一个占位符 ，多个占位符的数据要放在数组中
    connection.query(`select * from user where age > ? and age < ?`,[req.params.age,40] ,(err, data) => {
        if(err) {
            res.send(err);
        }else{
            res.send(data)
        }
    })
})

app.post('/api',(req,res)=>{
    console.log(req.query);
    const {sal,sal1} = req.query
    // const sql = 'SELECT *from user where salary > ? and salary < ?'
    const sql = 'SELECT *from user where salary between ? and ?'
    connection.query(sql,[sal,sal1],(err,data)=>{
        if(err) {
            res.send(err);
        }else{
            res.send(data)
        }
    })
})

let a = 20
let b = 6000
app.post('/add',(req,res)=>{
    console.log(req.body);
    const {name,age,salary} =req.body
    // const sql = `INSERT INTO user (name,age,salary) values ("Tom1",${a++},${b+1000})`
    const sql = `INSERT INTO user (name,age,salary) values (?,?,?)`

    connection.query(sql,[name,age,salary],(err,data)=>{
        if(err) {
            res.send(err);
        }else{
            res.send(data)
        }
    })
})
app.listen(9000,()=>{
    console.log('listening on http://localhost:9000');
})