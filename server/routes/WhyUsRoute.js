import { Router } from "express";
import WhyUsController from "../controllers/WhyUsController.js";
import authChech from "../middleware/authChech.js";

const router = Router();

router.get('/', WhyUsController.getWhyUs);
router.post('/', authChech, WhyUsController.postWhyUs);
router.patch('/', authChech, WhyUsController.changeWhyUs);
router.delete('/', authChech, WhyUsController.deleteWhyUs)

export default router;