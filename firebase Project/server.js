import express from 'express';
const app = express();
const port = 8090;

import { User, db } from './config/firebase.js';

import { addDoc, updateDoc, deleteDoc, getDoc, getDocs, query, where } from 'firebase/firestore';


app.use(express.json());

app.get('/', (req,res)=>{
    res.send('welcome page')
})

app.post('/register' , async(req, res)=>{
    let {name , email , password} = req.body;

    const q = query(User, where("email", '==', email));

    const querySnapShot = await getDocs(q);
    // console.log(querySnapShot);
    // console.log(querySnapShot.docs[0].data())
    if(querySnapShot.size == 0 ){
        const user = await addDoc(User, {name, email, password});
        res.json({msg:"user inserted"})
    }
    else{
        return res.json({msg:"user already registered"})
    }

    

})




app.listen(port , ()=>{
    console.log(`server is running on port ${port}`)
})