const express=require("express")
const router=express.Router()
const User=require("../models/User")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const { registerCheck, loginCheck, validator } = require('../middlewares/Validator')
const isAuth = require('../middlewares/isAuth')
const upload=require('../utils/multer')
//register
router.post("/register", registerCheck(), validator, async (req, res) => {
    const { email, password, role } = req.body
    try {
        if (role=="admin") {
            return res.status(401).send({ msg: "not auth !!" })
        }
        const existUser = await User.findOne({ email })
        if (existUser) {
            return res.status(400).send({ msg: "user exist ,please login" })
        }
        const newUser = new User(req.body)
        const hashedPassword = await bcrypt.hash(password, 10)
        
        newUser.password = hashedPassword
      
        await newUser.save()
        res.send({ msg: "user added successfuly", user: newUser })
    } 
    catch (error) {
        console.log(error);
    }
})
//login user 
router.post('/login', loginCheck(), validator, async (req, res) => {
    const { email, password } = req.body
    try {
        const existUser = await User.findOne({ email })
        if (!existUser) {
            return res.status(400).send({ msg: "bad credential !!" })
        }
        const isMatched = await bcrypt.compare(password, existUser.password)

        if (!isMatched) {
            return res.status(400).send({ msg: "bad credential !!" })
        }
        existUser.password = undefined
        const payload = { _id: existUser._id }
        const token = jwt.sign(payload, process.env.secretKey)
        res.send({ user: existUser, token })
    } catch (error) {
        console.log(error);
        res.status(400).send({ msg: error.message })
}})
// get current user ==>private
router.get("/current", isAuth(), (req, res) => {
    res.send({ user: req.user });
})
//edituser
router.put("/:id",upload("user").single("file"),isAuth(), async (req, res) => {
    const { password,name} = req.body
    try {
        const existName = await User.findOne({ name })
           if (existName &&existName._id==!req.params.id) {
            return res.status(400).send({ msg:"name exist,please change user name"})
        }
      if(req.body.password){
            const hashedPassword = await bcrypt.hash(password, 10)
             req.body.password=hashedPassword
           }
           const result = await User.updateOne({ _id: req.params.id }, { ...req.body })
           const UserUpdated = await  User.findOne({ _id: req.params.id })
      if(req.file)
             { const url = `${req.protocol}://${req.get("host")}/${req.file.path}`
             UserUpdated.img =url
              await UserUpdated.save()
                }
             console.log((result.modifiedCount) || (req.file));
         if ((result.modifiedCount) || (req.file)||(req.password)) {
            
            return res.send({ msg: "update suuccess", user: UserUpdated });
          }
        return res.status(400).send({ msg: " aleardy update " })
    }
     catch (error) {
        console.log(error)
        res.status(400).send(error.message)
    }
})
//Admin 
router.get("/admin" ,async (req,res) => {
    try {
            const users = await User.find().sort({name:1})
            res.send( users )
        } 
        catch (error) {
            console.log(error);
            res.status(400).send({ msg: error.message });
        }}
)

module.exports=router