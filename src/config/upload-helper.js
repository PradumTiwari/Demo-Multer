import multerS3 from 'multer-s3';
import multer from 'multer';
import s3 from './s3.js';
import dotenv from 'dotenv';
dotenv.config();

const upload=multer({
    storage:multerS3({
        s3:s3,
        acl:'public-read',
        bucket:process.env.AWS_BUCKET_NAME,
     
        metadata:(req,file,cb)=>{
            cb(null,{fieldName:file.fieldname});
        },
        key: (req, file, cb) => {   
            const fileName = `${Date.now()}_${Math.round(Math.random() * 1E9)}`;
            cb(null, `${fileName}`);
        }
    })
})

export default upload;