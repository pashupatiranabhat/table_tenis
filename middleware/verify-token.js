var jwt = require('jsonwebtoken');
var {User}=require('../config/models/User');
module.exports.Authenticate = async (req,res,next)=>{
    var _token = req.header('Authorization');
    if(_token !=undefined && _token!=""){
        try {
            var decoded = jwt.verify(_token, 'thisissecuritytoken');
            console.log(decoded)
            if(decoded){
              next();
                   
             }else{
                    return res.status(UN_AUTH_CODE).json({status:'fail',message:'Invalid Token'});
                }     
        } catch(err) {
            return res.status(UN_AUTH_CODE).json({status:'fail',message:'Invalid Token'});
        }
    }else{
        return res.status(UN_AUTH_CODE).json({status:'fail',message:'Invalid Token'});
    }
}


