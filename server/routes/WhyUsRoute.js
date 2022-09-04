import { Router } from "express";
import WhyUsController from "../controllers/WhyUsController.js";

const router = Router();

router.get('/', WhyUsController.getWhyUs);
router.post('/', WhyUsController.postWhyUs);
router.delete('/', WhyUsController.deleteWhyUs)

export default router;