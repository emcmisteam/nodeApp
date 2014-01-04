
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express Vic', user_id: req.session.user_id });
};