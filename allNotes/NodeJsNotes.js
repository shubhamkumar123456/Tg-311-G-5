// Javascript -->  Javascript is a programming language used to add functionality and logics in your webpage

// in default js runs scynchronously but if any time taking function comes it starts behaving asyncronously 

// With the help of javascript you can create dynamic web pages

// Before node js Javascript was used as a client side only(used to created frontend only)

// because js runs on browser. brwosers have javascript engine
// in chrome the name of js engine is V8 engine




// Node Js --> is is a run time environment for JS code( runs javascript code outside the browser)

//it is a single threaded language it have only one call stack. it uses Libuv library that is written in C language (that is multithreaded) . this is why node js can handle multiple task at a time and runs asynchronous

// callback --> functions that are passed into another function as an argument are known as callback function example -->
// function xyz(){
//     console.log("hello")
// }

// function second( a , b, c, d, e){
//     console.log(a)
//     console.log(b)
//     e()
// }

// second(10, "hello" , [1, 2, 3] , {name:"one"} , xyz )
// here  xyz is call back function because it is passed as an argument in function second


// import and export syntax in node js  --> 
// old style--> export using module.exports , import using require()
// new style(ES6) --> simple import and export keyword


// create package.json file in node js --> npm init -y

// destructuring --> 
// let obj = {
//     name:"one",
//     email:"one@gmail.com",
//     password:"123123"
// }

// let a = obj.name
// let b = obj.email
// let c = obj.password

// console.log(a)
// console.log(b)
// console.log(c)

// const {name, email, password}  = obj  // destructue syntax
// console.log(name)
// console.log(email)
// console.log(password)


// module and type of modules --> 

// core module --> these are pre installed in node js for example --> http , fs , __dirname ,

// local module --> these are created by user 

// third party module --> used to install from outside of node js for example --> express , nodemon , cors , jwt 

// https://github.com/shubhamkumar123456/Tg-311-G-5.git

