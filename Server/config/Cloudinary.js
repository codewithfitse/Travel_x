// config/cloudinary.js
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import dotenv from 'dotenv';
 dotenv.config();

cloudinary.config({
  cloud_name: "dosd2xzwx",
  api_key: "494176528643363",
  api_secret: "IFmX1iFv6PvheBJQxF_ZSYctQt0"
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads', // optional folder name in Cloudinary
    allowed_formats: ['jpg', 'png', 'jpeg'],
  },
});

export { cloudinary, storage };
