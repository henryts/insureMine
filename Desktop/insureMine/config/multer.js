import multer from "multer";
import path from "path";

/* FILE STORAGE */
const __basedir = path.resolve();
const fileFilter = (req, file, cb) => {
    const allowedMimeTypes = ["csv", "xlsx"];
    const fileExtension = file.mimetype.split("/")[1];

    if (allowedMimeTypes.includes(fileExtension)) {
        cb(null, true);
    } else {
        cb("Please upload only csv or xlsx file.", false);
    }
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __basedir + "/public/assets");
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-bezkoder-${file.originalname}`);
    },
});

export const upload = multer({ storage: storage, fileFilter: fileFilter }).single("file");
