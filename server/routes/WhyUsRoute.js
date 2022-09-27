import { Router } from "express";
import WhyUsController from "../controllers/WhyUsController.js";
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

router.get('/', WhyUsController.getWhyUs);
router.post('/', authChech, upload.single('icon'), WhyUsController.postWhyUs);
router.patch('/', authChech, upload.single('icon'), WhyUsController.changeWhyUs);
router.delete('/', authChech, upload.single('icon'), WhyUsController.deleteWhyUs)

export default router;