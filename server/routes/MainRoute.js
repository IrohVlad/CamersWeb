import { Router } from "express";
import MainController from "../controllers/MainController.js";

const router = Router();

router.get('/', MainController.getContent);
router.patch('/', MainController.changeContent);
// router.post('/', MainController.addContent);

export default router;