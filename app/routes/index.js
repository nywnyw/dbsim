var express = require('express');
var router = express.Router();
var formidable =require("formidable");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/upload',(req,res)=>{
  let form =new formidable.IncomingForm({
    uploadDir:"./upload",
    keepExtensions:true
  });
  //ver o que esse formidable faz e q tipo de obj é esse files;
  form.parse(req,(err,fields,files)=>{
    //não importa a resposta q eu mande o arquivo ainda será enviado, é só callback    
    res.json({fon:files});
  });  
  

});

module.exports = router;
