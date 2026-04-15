import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    api_key:"397473827185933",
    api_secret:"5Bn3WfJQzVhoD5fzU742scy65nc",
    cloud_name:"dsftyrbh0"
})

const storage = new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:"G5uploads",
        resource_type:'auto'
    }
})

const uploads = multer({storage});
export {uploads, cloudinary}