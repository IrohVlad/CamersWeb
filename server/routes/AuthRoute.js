import { Router } from "express";
import AuthController from "../controllers/AuthController.js";


const router = Router();

router.post('/', AuthController.login);
router.post('/reg', AuthController.getPassword);

export default router;