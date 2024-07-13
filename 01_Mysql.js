/* 

    MySQL 数据库： 关系型数据库  （以表格的形式存储数据）
        db: database 数据库
        SQL ： Structured Query Language 结构化查询语言 专门用来与数据库通讯的语言
        DBMS： 数据管理系统 Database Management System

    
    SQL通用语法：
        1.可以单行或多行输入， 以分号结尾
        2.SQL语句可以使用空格/缩进增强语句的可读性
        3.MySQL数据库的语句不区分大小写，关键字建议大写
        4. 注释  单行注释 -- 注释   # 注释内容（mysql特有）
*/
// 多行注释 /*  注释内容  */
/* 

书写顺序 ：                           执行顺序
    select  字段列表                      4
    from   表名                           1
    where 条件                            2
    group by 分组字段列表 having 分组后过滤条件 3 
    order by  排序字段列表                 5
    limit 分页参数                         6


*/


/* 
数据库操作
    show databases  查看所有数据库
    use database_name  切换数据库
    select database()  查看当前所在数据库
    create database database_name 创建数据库
    drop database if exists database_name;   删除数据库

表操作

--创建表
        create table [if not exists] table_name(
            字段名  字段类型 [字段约束]  [字段注释],
             id int comment 'id',
             name varchar(20) ,
             age int
         )comment '表注释';
    show tables;  查看当前数据库下所有表
     desc user ; 查看表结构
     alter table 表名 rename to 新表名; 修改表名
     drop table 表名 ； 删除表
     show create table user; 查看建表语句

    ALTER TABLE table_name DROP column_1;   删除字段
    ALTER TABLE table_name ADD column_1 number_type FIRST;  添加字段到第一列
    ALTER TABLE table_name ADD column_1 number_type AFTER column_2; 添加字段到指定位置
    ALTER TABLE table_name MODIFY column_1 new_number_type;  修改数据类型
     alter table user change 字段名 新字段名 字段类型 ;  修改字段名 和字段类型

     create table if not exists user(id int not null,name varchar(20),age int,job varchar(30),salary int);



     use mydatabase;
# 查询 表user中的所有数据
-- SELECT * FROM user;

# 向user中插入数据   insert into
# insert into 表名 （字段名列表） values （val，val2,...）  字段名和val一一对应
#  into user (id,name,age,job,salary) values  (1,'Amy',25,'front-end',5000);
# 向所有字段插入数据字段列表可以省略
 insert into user values  (7,'Mary',15,'front-end',5500);
# 多条数据使用,隔开
# insert into user  values  (3,'Tom',26,'back-end',6500),(4,'Jack',36,'back-end',7500),(5,'Tom',16,'front-end',null),(6,'Jack',46,null,7500);

# 修改数据  update   不加where表示修改所有数据
# update 表名 set 字段名=val1,字段名=val2 where 条件;
update user set name='Mary',age=37 where id=7;
# 删除数据 delete from
# delete from user where 条件 ;

delete from user where id=7 ;
SELECT * FROM user;
SELECT name,age FROM user where age>20;
SELECT id,name,age FROM user ;
SELECT * FROM testtb;
insert into testtb  values (null,'eee');
insert into testtb  (name) values ('fff');

# 查询  select
SELECT * FROM user;
SELECT id,name,age,job,salary FROM user;
# distinct 去重
SELECT distinct job FROM user;
# 条件查询  where
# select 字段列表 from 表名 where 条件 ；
# 比较运算符  > < <=  >=     != <>  不等于
select id,name,age from user where age = 15;
select id,name,age from user where age > 15;
select id,name,age from user where age <= 35;
# 逻辑运算符 && and    or ||   not  !
select id,name,age from user where age <= 35 && age>15;
select id,name,age from user where age <= 35 and age>15;
-- between 最小值 and 最大值  包含最小值和最大值  
select id,name,age from user where age between 16 and 36;

select id,name,age from user where age >= 35 or age<=15;
select id,name,age from user where age >= 35|| age<=15;
select id,name,age from user where age!=15;
select id,name,age from user where age<>15;
# in(val1,val2)   值在in 多个值中多选一
select id,name,age from user where age in (25,26,27);

-- like 模糊匹配 _ 匹配单个字符，%匹配任意个字符
select id,name,age from user where name like '___';
select id,name,age from user where name like 'Amy%';
select * from user;
# is null 判断一个字段是否为null
select id,name,salary from user where salary is null;
select id,name,salary from user where salary is not null;


# 正则匹配
select id,name,age from user where name regexp '^A';
select id,name,age from user where name regexp 'A';


*/
