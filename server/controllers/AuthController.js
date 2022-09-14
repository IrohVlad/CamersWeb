import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {Admin} from '../models/model.js';
class AuthController{
    async login(req, res){
        const {login, password} = req.body;
        const admin = await Admin.findOne({where:{login: login}});
        if (!admin){
            return res.status(500).json('Неверные данные');
        }
        const passValid = await bcrypt.compare(password, admin.password);
        if (!passValid){
            return res.status(500).json('Неверные данные');
        }
        const token = jwt.sign(
            {
                login
            },
            'secret123',
            {
                expiresIn: '1d',
            }
        );
        res.json({
            token,
            login
        })

    }
    async getPassword(req, res){
        const {login, password} = req.body;
        const salt = await bcrypt.genSalt(10);
        const passHash = await bcrypt.hash(password, salt);
        const admin = await Admin.create({login:login, password: passHash})
        res.send([admin, req.body]);
    }
}
export default new AuthController;