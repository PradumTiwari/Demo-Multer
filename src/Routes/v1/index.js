import express from 'express';
import upload from '../../config/upload-helper.js';
import { uploadSingle, multipleUpload, uploadSingleV2 } from '../../controllers/upload-controller.js';

const router = express.Router();


// Single file upload route
router.post('/upload-single', upload.single('file'), uploadSingle);

// Multiple files upload route
router.post('/upload-multiple', upload.array('files', 10), multipleUpload);

/* ------------------------ upload and error handling ----------------------- */
// Single file upload with error handling
router.post('/upload-single-v2', upload.single('file'), uploadSingleV2);

export default router;