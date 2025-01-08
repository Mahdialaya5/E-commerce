const isCompany = (req, res, next) => {
    if (req.user.role !== "company") {
      return  res.status(401).send({msg: "Access denied"}) 
    }
    next()
}
module.exports=isCompany