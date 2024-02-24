const isCompany = (req, res, next) => {
    if (req.user.role == "company") {
        next()
     
    }
    res.status(401).send({msg: "access denied"})
}
module.exports=isCompany