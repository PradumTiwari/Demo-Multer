import upload from "../config/upload-helper.js";
import s3 from "../config/s3.js";


export  const uploadSingle=(req,res)=>{
    console.log(req.file);
    res.json(req.file);
    
  }


  export const multipleUpload=(req,res)=>{
    res.json(req.files)
  }


 export const uploadSingleV2=async(req,res)=>{
    const uploadFile=await s3.promisify(upload.single('file'));
    try {
        await uploadFile(req,res);
        res.json(req.file);
        
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
