// Mongodb --> it is a Nosql data base where data is stored in JSON format

// Crud -->
// MOngodb commands --> 


// 1) view all databse --> show dbs
// 2) switch to any existing Databse or create a new Database --> use databaseName
// 3)create a collection inside database --> db.createCollection('collectionName')

// 4) insert Data inside collection --> 
    // a) insert Single Data--> db.collectionName.insertOne({key : value})

    // b) insert Multiple Data-->db.collectionName.insertMany([{},{}])
    // example-->db.products.insertMany([ 
    //      {name:"iphone",price:45000, category:"smartphones"}, 
    //      {name:"samsung",price:80000,category:"smartohones"}
    //     ])

// 5) get Data -->
    // a) get all data present in a collection(folder) --> 
            // db.collectionName.find()
    // b)get matched data --> db.collectionName.find({key:value})
    // example-->db.products.find({category:'smartphones'})
    
    // c) get single Data --> db.collectionName.findOne({key:value})
    // example-->db.products.findOne({_id:ObjectId('698f3f837dc16738946767f1')})

    // 6)Delete Data -->
        // a) delete Single --> db.collectionName.deleteOne({key:value})

        // example-->db.products.deleteOne({name:"iphone"})

        // a) delete Multiple -->db.collectionName.deletemany({key:value})
        // example-->db.products.deleteOne({category:"smartphones"})