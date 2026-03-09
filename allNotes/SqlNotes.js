// Sql --> (Structured query language ) used to manage relational database unlike mongodb sql saves data in table form(row and column)

// Commands and queries --> 

// 1) to view All database --> show databases
// 2) switch to any existing Db --> use databaseName
// 3) create a new Database --> create database databaseName
// 4) createa a table inside database --> 
        // create table tableName(
        //     columnName datatype,
        //     columnName datatype,
        //     columnName datatype,
        // )
        // example --> 

        // create table users(
        //     id int auto_increment primary key,
        //     name varchar(150) not null,
        //     email varchar(150) unique not null,
        //     age int 
        //     createdAt timestamp default current_timestamp
        // )

// 5) insert data inside a table --> 
// insert into tableName (columnName1, columnName2) values(value1, value2);

// example --> 
// insert into users(name, email, age) 
// values
// ('john', 'john@gmail.com',23),
// ('jack', 'jack@gmail.com',33),
// ('nick', 'nick@gmail.com',43)


// 6) get all data from a table --> 
// select * from tableName

//7) get only selected column data --> 
// select columnName1, columnName2 from tableName

//8)get  data using condition --> 
//  select * from tableName  where columnName = value
// example -->    select * from users where age > 25

//9) Update Data  --> 
// update tableName set columnName = "new value" where columnName = "Value"
//example --> update users set name = "jack One" where id = 2 

//10) Delete Data -->
// delete from tableName where columnName = "value" 

//11) delete a table  --> 
    // drop table tableName

//12) delete database -->
    // drop database databaseName;

//13) get  sorted Data -->
//  select * from tableName Orderby columnName ASC/DESC;

//14) search by chracter  -->
// select * from users where name like "j%";

//15)get all rows count -->
// select COUNT(*) from users;

//16) find avg using aggregation  -->
//  select AVG(columnName) from tableName
// example -->  select AVG(age) from users;


//17)update Table  --> 
//a) add a column in existing table --> 
    // ALTER table tableName add role ENUM('user','admin') default 'user'
    // ALTER table tableName drop role 
    // ALTER table tableName modify role varchar(250)
     