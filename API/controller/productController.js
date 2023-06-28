var product = require('../model/ProductModel')

// *************************************************************** ADD MOVIES DITAILS
const addProduct = async(req,res) => {
    try {
        let data = await product.create(req.body);
        res.status(200).json({
            status:"Success Full Add Movies Ditails",
            data
        })
    } catch (error) {
        res.status(400).json({
            status:"error"
        })
    }
}
// *************************************************************** ADD MOVIES DITAILS
const findProduct = async(req,res) => {
    try {
        let data = await product.find();
        res.status(200).json({
            status:"Success Full find",
            data
        })
    } catch (error) {
        res.status(400).json({
            status:"error"
        })
    }
}


module.exports = {
    addProduct,
    findProduct

}