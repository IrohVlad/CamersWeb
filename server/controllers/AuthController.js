import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import {Admin} from '../models/model.js'
class AuthController{
    async login(req, res){
        // const token = jwt.sign()
        const admin = await Admin.findOne({id: 1});
        const passValid = await bcrypt.compare(req.body.password, admin.password);
        if (!passValid){
            return res.status(500).send('Неверный пароль');
        }
        const token = jwt.sign(
            {
                password: admin.password
            },
            'secret123',
            {
                expiresIn: '30d',
            }
        );
        res.json({
            token,
            admin
        })

    }
    async getPassword(req, res){
        const pass = req.body.password;
        const salt = await bcrypt.genSalt(10);
        const passHash = await bcrypt.hash(pass, salt);
        const admin = await Admin.create({password: passHash})
        res.send([admin, req.body]);
    }
}
export default new AuthController;