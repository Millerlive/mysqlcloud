/* 
# 查看所有数据库 show databases;
# 创建数据库 create database db_name;
# 切换数据库  use db_name;
# 删除数组库  drop database if exists db_name;
# 查看当前数据库 select database();
# 表操作
# 创建表
create table tb_name(
	id int primary key auto_increment comment 'id',
    leader varchar(20) 
    )comment 'table comment';
# 查看所有表 show tables;
#查看表结构 desc tn_name;
# 查看建表语句 show createtable tb_name;
# 删除表 drop table 
# 修改表  alter table tb_name rename to new_name;


# 查询
use mydatabase;
SELECT * FROM user;
select id,name,age,job,salary s from user;
# 条件查询  where 
select id,name,age,job, salary s from user where age>20 and salary > 6000;
# 聚合函数 count(字段名) 统计数量  max() min() avg() sum()
# 聚合函数通常配合条件查询使用 null值不参与聚合函数运算
# age 》20的人数
select count(*) count from user where age >20;
select *from user where age >20;
select count(*) count from user where age >20 and age <30;
select max(salary) max_sal from user ;
select min(salary) min_sal from user ;
select avg(age) avg_age from user;
select sum(age) sum_age from user;
select count(*) from user;
select count(salary) from user;
select count(job) from user;

# 分组查询 group by 字段名  having 条件
select job from user group by job;
select job,count(job) from user group by job;
select * from user where age>20;
select job,count(job) from user where age>20 group by job;
# select 字段名,count(job) from 表名 where 条件  group by 字段名  having 分组后的过滤条件;
# where 是在分组前执行，不满足where条件的数据，不参与分组 ，having 是对分组后的结果进行过滤
# where 不能对聚合函数进行判断，having可以
select job,count(job) from user  group by job having count(job)<3;
select job,count(job) from user where salary >5000 group by job having count(job)<3;

insert into user (id,name,age,job,salary) values (10,'Jhon',30,'front',6000),(11,'Jhon11',35,'front',6500);
delete from user where id in (8,9);
select job,count(job) from user where salary >5000 group by job having count(job)>3;


# 排序查询 order by 字段一 desc ,字段二 asc
# 当有多个字段时，优先按照字段一排序，当字段1相同时，再按照字段二排序
#  asc 升序（默认值）    sesc 降序
select * from user order by age ;
select * from user order by age desc;
select * from user order by age desc,salary desc;
update user set salary=8000 where id in (7,9);

select job,count(job) from user where salary >5000 group by job having count(job)>1 order by  count(job) desc;
select job,count(job) from user where salary >5000 group by job having count(job)>1;

SELECT u.id,u.name FROM user as u;

# 分页查询 limit 起始索引 ,查询记录条数  起始索引从0开始，为0时可以省略
# 起始索引 = （查询的页码 - 1） * 每页的记录条数
SELECT * FROM user limit 3;
SELECT * FROM user limit 3,3;
SELECT * FROM user limit 6,3;
SELECT * FROM user where age>20 order by salary desc limit 3;

ALTER TABLE user ADD leaderId int;
update user set leaderId=1 where id in (1,2,5,7,9);
update user set leaderId=2 where id in (3,4,6,11);
update user set leaderId=3 where id in (8,10);
update user set leaderId=null where id = 9;


alter table leader rename to leader_tb;
insert into leader_tb (leader) values ('Collin');
# 多表查询  
# 内连接： 查询两张表的交集  
# 显式内连接 select * from 表1 [inner] join 表2 on 连接条件
select * from user u inner join leader_tb l on u.leaderId = l.id;
select u.id,u.name,l.leader from user u inner join leader_tb l on u.leaderId = l.id;
# 隐式内连接 select 字段列表 from 表1，表2 where 连接条件 ;
select u.id,u.name,l.leader from user u,leader_tb l where  u.leaderId = l.id;

# 外连接 
# 左外连接: 查询左表中的所有数据，及两张表的交集部分
# select 字段列表 from 表1 left [outer] join 表2 on 连接条件;
select u.id,u.name,l.leader from user u left outer join leader_tb l on u.leaderId = l.id;
select u.id,u.name,l.leader from  leader_tb l left outer join user u on u.leaderId = l.id;

# 右外连接： 查询右表中的所有数据，及两张表的交集部分
# select 字段列表 from 表1 right [outer] join 表2 on 连接条件;
select u.id,u.name,l.leader from  leader_tb l right outer join user u on u.leaderId = l.id;
select u.id,u.name,l.leader from user u right outer join leader_tb l on u.leaderId = l.id;






SELECT * FROM user;
SELECT * FROM leader_tb;

















*/