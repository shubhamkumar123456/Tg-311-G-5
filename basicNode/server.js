import express from 'express';
const app = express();
const port = 8090;



app.use(express.json())   // parse the data in object form
// request method --> 
// get method --> getdata from server use get method
// post method --> send data on server from frontend
// put method --> update data on server
// delete method --> delete data on server 

app.get('/',(req,res)=>{
    res.send('this is welcome page')
})


app.get('/products',(req, res)=>{
    let arr = [
        {name:"samsung", price:40000, rating:4 ,quantity:1},
        {name:"Mi", price:80000, rating:2 ,quantity:1},
        {name:"oppo", price:10000, rating:2 ,quantity:1},
        {name:"iphone", price:20000, rating:3 ,quantity:1},
        {name:"micromax", price:45000, rating:4 ,quantity:1},
        {name:"real me", price:90000, rating:5 ,quantity:1},
    ]
    res.json({products:arr})
})

//  in post method we can send data through api using various ways 
// a) in api's body
// b) in api's params
// c) in api's query
// d) in api's headers
// e) in api's cookies

app.post('/register', (req, res)=>{
    console.log(req.body);
    res.json({msg:"data recieved"})
})


// create a products api which can recieve data from frontend. console the data in server


app.listen(port,()=>{
    console.log('server is running')
})
