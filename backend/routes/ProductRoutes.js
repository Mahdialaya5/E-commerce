const express=require("express")
const router=express.Router()
const Product=require("../models/Product")
const upload=require('../utils/multer')
const isAuth = require('../middlewares/isAuth')

//add new product
router.post("/", upload("products").single("file"),async (req, res) => {
    try {
   console.log(req.file);
       const url = `${req.protocol}://${req.get("host")}/${req.file.path}`
        const newProduct = new Product(req.body)
        console.log(url);
        newProduct.img=url
        await newProduct.save()
        res.send({ msg: "product  add succes", product: newProduct })
    } catch (error) {
        console.log(error)
        res.status(400).send(error.message)
    }}
)

//get all products
router.get("/", async (req, res) => {
    try{

        const products= await Product.find().populate("seller")
      
        res.send(products)
    }
    catch(error){
console.log(error)
res.status(400).send(error.message)
    }
})

//get one product
router.get("/:id",isAuth(), async (req, res) => {
    try {
     const oneproduct = await Product.findById(req.params.id).populate("seller")
        res.send({product:oneproduct})
    }
    catch (error) {
        console.log(error)
        res.status(400).send(error.message)
}})

//edit product
router.put("/:id",upload("products").single("file"), async (req, res) => {
    try {
         const result = await Product.updateOne({ _id: req.params.id }, { ...req.body })
            productUpdated = await  Product.findOne({ _id: req.params.id })
             if(req.file)
             { const url = `${req.protocol}://${req.get("host")}/${req.file.path}`
             productUpdated.img =url
              await productUpdated.save()
             }
     if (result.modifiedCount || req.file) {
            return res.send({ msg: "update suuccess", product: productUpdated });
          }
         res.status(400).send({ msg: " aleardy update " })
    }
     catch (error) {
        console.log(error)
        res.status(400).send(error.message)
    }
})

module.exports=router