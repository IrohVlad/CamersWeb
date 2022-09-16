import { Router } from "express";
import MainController from "../controllers/MainController.js";
import authChech from "../middleware/authChech.js";

const router = Router();

router.get('/', MainController.getContent);
router.patch('/', authChech, MainController.changeContent);
// router.post('/', MainController.addContent);

export default router;