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
// upload.single('image')
router.get('/', PostsController.getPosts);
router.post('/', authChech, PostsController.postPost);
router.patch('/', authChech, PostsController.changePost);
router.delete('/', authChech, PostsController.deletePost)

export default router;