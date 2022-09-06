import { Router } from "express";
import mainRouter from './mainRoute.js';
import postRouter from './PostsRoute.js';
import priceRouter from './PriceRoute.js';
import whyUsRouter from './WhyUsRoute.js';
import AuthRoute from './AuthRoute.js';


const router = Router();
router.use('/auth', AuthRoute)
router.use('/main', mainRouter);
router.use('/posts', postRouter);
router.use('/price', priceRouter);
router.use('/why', whyUsRouter);

export default router;