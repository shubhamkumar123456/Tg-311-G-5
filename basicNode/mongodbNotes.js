// MongoDb -->mongodb is a open source document-oriented Nosql database. unlike traditional sql database that uses tables and rows , mongodb stores data in JSON like format.


// Mongodb CRUD commands-->

//1)to view all database --> show dbs 

//2)switch to any existing databse or create a new Database --> use DatabaseName

//3) create a collection inside Db --> db.createCollection('collectionName')

//4) insert Data inside a collection --> 
        // a)insert single Data --> db.collectionName.insertOne({key:value})
            // example db.users.insertOne({name:"one",email:"one@gmail.com"})

        // b)insert multiple Data -->db.collectionName.insertMany([{} , {} , {}..])
        // example -->db.users.insertMany([{name:"two",email:"two@gmail.com"} , {name:"three",email:"three@gmail.com"}]

//5) get a data or read a data -->
    // a) read all data inside a collection --> db.collectionName.find()
    // b) get a single Data --> db.collectionName.findOne({key:value})

//6)Update a Data -->
    //a) update single Data --> db.collectionName.updateOne({key:value} ,  {$set:{key:value}})

    //a) update single Data --> db.collectionName.updateMany({key:value} ,  {$set:{key:value}})

//7) delete a Data --> 
        //a) delete single Data --> db.collectionName.deleteOne({key:value})
        //a) delete multiple Data --> db.collectionName.deleteMany({key:value})

//8)delete a collection (folder) --> db.collectionName.drop()

//9)delete a database  --> db.dropDatabase()

// $lt, $gt , $et, $lte , $gte
// 10) query operator --> db.collectionName.find({price:{$lt:5000}})
// 10) query operator --> db.collectionName.find({price:{$lt:5000,$gt:3000}})

// let arr = [
//     {name:"iphone", price:45000, rating:4.5, quantity:5},
//     {name:"MI", price:15000, rating:2, quantity:4},
//     {name:"real me", price:25000, rating:3.5, quantity:4},
//     {name:"samsung", price:65000, rating:5, quantity:2},
//     {name:"oppo", price:85000, rating:2.5, quantity:3},
   
// ]


let user = {
    name:"iron man",
    email:"iroman@gmail.com",
    age:40,
    details:{
        houseNo:12,
        city:"kanpur",
        state:"UP"
    }
}

// find data using nested key in mongodb --> 
// example --> db.users.find({"details.city":'lucknow'})

