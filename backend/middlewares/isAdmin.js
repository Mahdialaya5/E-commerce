const isAdmin = (req, res, next) => {
    if (req.user.role !== "admin") {

        return  res.status(401).send({msg: "Access denied"})
    }
    next()
}
module.exports=isAdmin