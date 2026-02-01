import multer from 'multer';
import path from 'path';

// Storage configuration
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads');
  },

  filename: (req, file, cb) => {
    // Corrected 'originalname' spelling
    let ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

// File filter
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpg|jpeg|png|webp|avif|jfif/;

  // Corrected spelling and variable name for MIME type
  let ext = path.extname(file.originalname).toLowerCase();
  let mime = file.mimetype.toLowerCase();

  if (allowedTypes.test(ext) && allowedTypes.test(mime)) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed'));
  }
};

// Multer instance
let upload = multer({
  storage,
  fileFilter,
  // limits: { fileSize: 100 * 1024 }, // 100 KB limit
});

export default upload;
