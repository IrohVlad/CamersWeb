import { Router } from "express";
import PostsController from "../controllers/PostsController.js";
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
router.post('/', PostsController.postPost);
router.put('/', PostsController.changePost);
router.delete('/', PostsController.deletePost)

export default router;