import express from "express";
import dotenv from 'dotenv'
import {MainContent, WhyUsCards, PriceList, Posts} from './models/model.js'
import sequelize from './models/db.js'
import cors from 'cors';
import router from './routes/index.js';
import errorHandling from './middleware/errorHandling.js'
import path from 'path';
const __dirname = path.resolve();
dotenv.config();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'static')));
app.use('/api', router);
app.use(errorHandling);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync({alter: true});
        app.listen(PORT, ()=> console.log(`server started on ${PORT}`));   
    }
    catch{
        throw new Error('не удалось запустить')
    }
}
start();