import { Router } from "express";
import PostsController from "../controllers/PostsController.js";
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
router.get('/', PostsController.getPosts);
router.get('/pre', PostsController.getPrePosts);
router.post('/', authChech, upload.single('img'), PostsController.postPost);
router.patch('/', authChech, upload.single('img'), PostsController.changePost);
router.delete('/', authChech, upload.single('img'), PostsController.deletePost)

export default router;