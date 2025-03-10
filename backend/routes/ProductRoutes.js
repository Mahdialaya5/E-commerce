const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const upload = require("../utils/multer");
const isAuth = require("../middlewares/isAuth");
const isCompany = require("../middlewares/isCompany");


router.post("/",upload.single("file"),isAuth(),isCompany, async (req, res) => {
    try {
      const newProduct = new Product(req.body);
      newProduct.img = req.file.path;
      await newProduct.save();
      return res
        .status(201)
        .send({ msg: "product  add succes", product: newProduct });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
);

//get all products
router.get("/", isAuth(), async (req, res) => {
  try {
    const products = await Product.find().populate("seller");
    return res.status(200).send(products);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//get one product => private for company
router.get("/:id", isAuth(), isCompany, async (req, res) => {
  try {
    const oneproduct = await Product.findById(req.params.id).populate("seller");
    return res.status(200).send({ product: oneproduct });
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

//edit product => private for company
router.put( "/:id",upload.single("file"),isAuth(),isCompany,async (req, res) => {
    try {
      const result = await Product.updateOne(
        { _id: req.params.id },
        { ...req.body }
      );
      productUpdated = await Product.findOne({ _id: req.params.id });
      if (req.file) {
        productUpdated.img = req.file.path;
        await productUpdated.save();
      }
      if (result.modifiedCount || req.file) {
        return res
          .status(202)
          .send({ msg: "update suuccess", product: productUpdated });
      }
      return res.status(400).send({ msg: " aleardy update " });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }
);

//delete product => private for company
router.delete("/:id", isAuth(), isCompany, async (req, res) => {
  try {
    const result = await Product.deleteOne({ _id: req.params.id });
    if (result.deletedCount) {
      return res.status(203).send({ msg: "delete  success" });
    }
    return res.status(400).send({ msg: "aleardy delete" });
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
