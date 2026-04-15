import express from 'express';
const app = express();
const port = 8090;
import cors from 'cors'
import { cloudinary, uploads } from './middleware/multer.js';


app.use(cors());
app.use(express.json())

app.get('/', (req,res)=>{
    res.send('welcome page')
})

app.post('/uploads',uploads.single('file'), (req,res)=>{
    try {
        res.json({msg:"file uplaoded successsfullt", data:req.file})
    } catch (error) {
       res.json({msg:error.message}) 
    }
} )

app.delete('/delete',async(req,res)=>{
    try {
        let {filename} = req.body
        let data = await cloudinary.uploader.destroy(filename);
        res.json({msg:"file deleted successfully"})
    } catch (error) {
        res.json({msg:error.message})
    }
})

app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})

