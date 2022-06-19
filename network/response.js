exports.success  =  function(req,res,message,status){
    res.status(status || 200).send({
        body : message,
        error : ''
    })
}
exports.error  =  function(req,res,message,status,details){
    console.log(details);
    res.status(status || 200).send({
        body : message,
        error : message
    })
}