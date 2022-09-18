import { Router } from "express";
import PriceController from "../controllers/PriceController.js";
import authChech from "../middleware/authChech.js";

const router = Router();

router.get('/', PriceController.getPrices);
router.post('/', authChech, PriceController.postPrice);
router.delete('/', authChech, PriceController.deletePrice)

export default router;