const cloudinary=require("cloudinary").v2
const {CloudinaryStorage}=require("multer-storage-cloudinary")

//configure cloudinary
cloudinary.config({
    cloud_name:"dygzmslsj",
    api_key:"737868815614454",
    api_secret:"okwGZKzFmRwjGBt8hWrzfRNqwc0"
})

//configure cloud storage
const storage=new CloudinaryStorage({
    cloudinary:cloudinary,
    params:{
        folder:"bookstore",
        public_id:(req,file)=>Date.now()+"-photo"
    }
})

//exports storage
module.exports=storage