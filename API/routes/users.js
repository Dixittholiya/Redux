var express = require('express');
var router = express.Router();
var { userRegister, userLogin  } = require('../controller/UserController')
var { addProduct,findProduct  } = require('../controller/productController')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// ****************************************************** USER REGISTER 
router.post("/user!Register",userRegister);


// ******************************************************* ADD USER
router.post("/user-login",userLogin);


// ******************************************************* ADD Product
router.post("/addProduct",addProduct);


// ******************************************************* ADD Product
router.get("/findProduct",findProduct);

module.exports = router;
