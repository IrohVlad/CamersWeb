import { Router } from "express";
import PriceController from "../controllers/PriceController.js";

const router = Router();

router.get('/', PriceController.getPrices);
router.post('/', PriceController.postPrice);
router.delete('/', PriceController.deletePrice)

export default router;