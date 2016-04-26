var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');
var cookieParser = require('cookie-parser');
var path = require("path");
var fs = require("fs");
var config;

function loadJSONfile (filename, encoding) {
    try {
        // default encoding is utf8
        if (typeof (encoding) == 'undefined') encoding = 'utf8';
        
        // read file synchroneously
        var contents = fs.readFileSync(filename, encoding);

        // parse contents as JSON
        return JSON.parse(contents);
        
    } catch (err) {
        // an error occurred
        throw err;  
    }
}
function checkIfConfigExists(lang){
    if (fs.existsSync(path.join(__dirname, '../..', '/turn/data/'+lang+'.json'))) {
        config=loadJSONfile(path.join(__dirname, '../..', '/turn/data/'+lang+'.json'));
        return true
    } else {
        config=loadJSONfile(path.join(__dirname, '../..', '/turn/data/en.json'));
        return false
    }
}
function sendContactEmail(data, res){
    // create the nodemailer
    var client = nodemailer.createTransport(sgTransport({
        auth: {
          api_key: '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'
        }
    }));

    var mailOptions = {
        to: 'sebastian@turninternational.co.uk',
        from: data.email,
        subject:  data.name+" interested in: \n "+data.subject,
        html: '<b>You have a new contact from your website</b><br /><p>'+data.message
    };
    //send
    client.sendMail(mailOptions, function(err, info) {
        //re-render contact page with message
        var message = null;
        if(err){
            message = "An error has occured " + err;
            console.log(err);
        } else {
            res.send(true)
            message = "Email has been sent!";
            console.log('Message sent: ' + info.response);
        }
        res.redirect('/');
    });
}
function renderContentPage(url,lang,res){
    res.render('content', { 
        menu        : config.menu,
        title       : config[url].title,
        intro       : config[url].intro,
        heading     : config[url].heading,
        content     : config[url].content,
        columns     : config[url].mainImages,
        images      : config[url].innerImages,
        lang        : lang
    });
}
/* GET home page. */
router.get('/', function(req, res, next) {
  checkIfConfigExists('en');
  res.render('index', {
            title   : config.home.title,
            type    :  true,
            titles  : config.home.titles,
            content : config.home.content,
            menu    : config.menu,
            lang    : 'en'
            // menu    : config.fourcerofour.menu,
            // image    : config.fourcerofour.image
  });
});
router.get('/:language([a-zA-Z]{2,})', function(req, res, next) {
    var lang=req.params.language;
    if(checkIfConfigExists(lang)){
        res.render('index', { 
            title   : config.home.title,
            type    :  true,
            titles  : config.home.titles,
            content : config.home.content,
            menu    : config.menu,
            lang    : lang
            // menu    : config.fourcerofour.menu,
            // image    : config.fourcerofour.image
        });
    } else if(checkIfConfigExists('en') && (lang in config)){
        renderContentPage(lang, 'en', res)
    }else{
        res.redirect('/404');
    }
});
router.post('/contact', function(req, res) {
    var data = {
        email: req.body.email,
        name: req.body.name,
        subject: req.body.subject,
        message: req.body.message
    };
    sendContactEmail(data,res);
});
router.get('/:language([a-zA-Z]{2,})/:url([a-zA-Z]{2,})', function(req, res, next) {
    var url=req.params.url;
    var lang=req.params.language;
    if(checkIfConfigExists(lang)){
        if (url in config) { 
            renderContentPage(url,lang,res)
        } else {
            res.redirect('/'+lang+'/404');
        }
    } else {
        res.redirect('/404');
    }
});
router.get('/404', function(req, res, next) {
    res.render('404', { 
            title   : config.fourcerofour.title,
            menu    : config.menu,
            lang    : 'en'
            // content : config.fourcerofour.content,
            // menu    : config.fourcerofour.menu,
            // image    : config.fourcerofour.image
    });
});
router.get('/:language([a-zA-Z]{2,})/404', function(req, res, next) {
    var lang=req.params.language;
    if(!checkIfConfigExists(lang)){
        lang = 'en';
    }
    res.render('404', { 
            title   : config.fourcerofour.title,
            menu    : config.menu,
            lang    : lang
            // content : config.fourcerofour.content,
            // menu    : config.fourcerofour.menu,
            // image    : config.fourcerofour.image
    });
});
module.exports = router;