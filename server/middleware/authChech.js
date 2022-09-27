import jwt from 'jsonwebtoken';

// req.headers.authorization.slice(7, )
export default (req, res, next)=>{
    const token = (req.headers.authorization || '');
    console.log(token);
    if(!token){
        return res.status(401).json('токен не найден')
    }
    try{
        const decode = jwt.verify(token, 'secret123');
        next();
    }
    catch{
        res.status(401).json('токен не распознан')
        console.log('adwd');
    }
}