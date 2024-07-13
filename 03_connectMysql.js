// 安装   npm i  mysql2
// 导入 
const mysql = require('mysql2');
// 创建mysql连接
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    database: 'mydatabase'
})
connection.connect((err)=>{
    if(err) {
        console.log('err', err);
    }else{
        console.log('connection success');
    }
})
// connection.query 是一个常见的数据库查询方法，通常用于执行 SQL 查询语句。
// const selUser = 'select * from user'
const selUser = 'select * from user where age>30'
connection.query(selUser,(err,res)=>{
    if(err) {
        console.log('err', err);
    }else{
        console.log('select success', res);
    }
})