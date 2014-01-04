


exports.index = function(req, res){

    if(req.session.user_id=='vic'){
        res.redirect('/inHome');
    }else{    
        res.render('auth', {title: '登入title', msg: '這是auth.js 的 auth.jade' });
    }
 };



exports.loginAuth = function(req, res){
    var post = req.body;

    console.log('----> post.user ['+ post.user +'] / pass ['+ post.pass + ']  <------');

    if(req.session.user_id=='vic'){
        res.redirect('/inHome');
    }else{
          if (post.user == 'vic' && post.pass == '99004') {
            req.session.user_id = 'vic';
            res.redirect('/inHome');
          } else {
            res.redirect('/login');
          }
     }
};


/*

exports.loginAuth = function(req, res, next){
   console.log('----> loginAuth [pass]: '+ req.body.pass);
   console.log('----> req [session]: '+ req.session);
  

   var name  = req.body.user; 
   var pass  = req.body.pass; 
  if(req.body.pass && req.session.name == 'vickk'){
      res.render('index', {msg:'loginAuth:' + name +'註冊成功你的密碼為:'+pass});
  }else{
      res.render('auth', {msg:'loginAuth - fail'});
      next();
  }
  
};



exports.userCheck = function(req, res){
  console.log(req.body.pass);

  var nameStr  = req.body.user; 
   var pass  = req.body.pass; 
  if(req.body.pass){
      req.session = {name:nameStr }
      res.render('index', {msg:'userCheck: ' + nameStr +' -------- :'+pass});
  }else{
      res.render('auth', {msg:'userCheck - fail'});
  }
  
};

*/