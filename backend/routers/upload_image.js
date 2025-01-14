import express from "express";
import multer from "multer";

export const routerApiUploadImage = express.Router();

// Configuración de almacenamiento para multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); // Carpeta donde se guardarán las imágenes
    },
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${file.originalname}`;
        cb(null, uniqueName);
    },
});

const upload = multer({ storage });

routerApiUploadImage.put("/uploadimage", upload.single("image"), async (req, res) => {
    const customHeader = req.headers['x-frontend-header'];

    if (customHeader !== 'frontend') {
        return res.status(401).send('Unauthorized');
    }

    if (!req.file) {
        return res.status(400).send({ success: false, msg: "DIDNT SEND ANY IMAGE", filePath: "/uploads/user-default.png"});
    }
    res.send({ success: true, msg: "UPLOADED IMAGE SUCCEFULLY", filePath: req.file.path });
})

