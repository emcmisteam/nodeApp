
/*
 * GET users listing.
 */

exports.index = function(req, res, next){
  res.send("respond with a resource");
};

exports.inMyhome = function(req , res){
   var name  = req.session.user_id; 
   res.render('home', {msg:'恭喜' + name +'登入成功'});

};

exports.config = function(req, res, next) {
   console.log("Do some configs here...");
   next();
};