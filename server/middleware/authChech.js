import jwt from 'jsonwebtoken';

export default (req, res, next)=>{
    const token = (req.headers.authorization.split()[1] || '');
    console.log(token);
    if(!token){
        return res.send('нет доступа')
    }
    try{
        const decode = jwt.verify(token, 'secret123');
        
    }
    catch{
        res.send('токен не распознан')
    }
    finally{
        next();
    }
}