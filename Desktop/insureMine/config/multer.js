import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import path from "path";
import { CloudinaryStorage } from "multer-storage-cloudinary";
/* FILE STORAGE */
const __basedir = path.resolve();
const csvFilter = (req, file, cb) => {
    if (file.mimetype.includes("csv")) {
      cb(null, true);
    } else {
      cb("Please upload only csv file.", false);
    }
  };
  
  var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, __basedir + "/public/assets");
    },
    filename: (req, file, cb) => {
      console.log(file.originalname);
      cb(null, `${Date.now()}-bezkoder-${file.originalname}`);
    },
  });
  
export const upload = multer({ storage: storage, fileFilter: csvFilter }).single("file");



// // Cloudinary configuration
// cloudinary.config({
//   cloud_name:'dofusy2dr',
//   api_key:'436187152191887',
//   api_secret:'E49Q-rA9YXx7OiTZ6bDZdgGcjZA',
// });

// // Multer configuration
// const storageOptions = {
//   cloudinary: cloudinary,
//   params: {
//     resource_type: "auto",
//   //  allowed_formats: ["jpg", "jpeg", "png", "pdf"],
//     public_id: (req, file) => {
//       const fileName = file.originalname.split(".").slice(0, -1).join(".");
//       return fileName;
//     },
//   },
// };

// const storage = new CloudinaryStorage(storageOptions);

// export const upload = multer({ storage: storage }).single("file");
// export const profilePhoto = multer({ storage: storage }).single("profilePhoto");


