import { Router } from "express";
import MainController from "../controllers/MainController.js";
import authChech from "../middleware/authChech.js";
import multer from 'multer';

const storage = multer.diskStorage({
    destination: (_, __, cb) => {
        cb(null, 'static');
    },
    filename: (_, file, cb) => {
        cb(null, file.originalname);
    },
})
const upload = multer({ storage });

const router = Router();

router.get('/', MainController.getContent);
router.patch('/', authChech, upload.single('img'), MainController.changeContent);
// router.post('/', MainController.addContent);

export default router;