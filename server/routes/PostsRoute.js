import { Router } from "express";
import PostsController from "../controllers/PostsController.js";

const router = Router();

router.get('/', PostsController.getPosts);
router.post('/', PostsController.postPost);
router.put('/', PostsController.changePost);
router.delete('/', PostsController.deletePost)

export default router;