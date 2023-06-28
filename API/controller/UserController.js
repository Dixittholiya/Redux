var user = require('../model/UserModel')

// ****************************************************** USER REGISTER 
const userRegister = async(req,res) => {
    try {
        let find = await user.find({"Email":req.body.email})
        if (find == "") {
            var data = await user.create(req.body);
        
                res.status(200).json({
                    status:"Register Completed",
                    data
                })
        }
        else{
            res.status(400).json({
                status:"Your Email Is Alrady In Database"
            })
        }
        
    } catch (error) {
        res.status(400).json({
            status:"error"
        })
    }
}

// ********************************************** USER REGISTER
const userLogin =async(req,res) => {
    try {
        let find = await user.findOne({"email":req.body.email})
        if (find) {
            if (find.password == req.body.password) {
                res.status(200).json({
                    status:"Success Full Login",
                    find
                })
            }
            else{
                res.status(400).json({
                    status:"Worng Password"
                })
            }
        }
        else{
            res.status(400).json({
                status:"Worng Email"
            })
        }
    } catch (error) {
        res.status(400).json({
            status:error
        })
    }
}





module.exports = {
    userRegister,
    userLogin
}