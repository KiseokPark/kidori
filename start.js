
var express = require('express'); //모듈은 함수다 그래서 밑에서 실행
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var Web3 = require("web3");
var myConfig  = require('./config/myConfig.json');
var myIp = myConfig.host;

///////////////////////////////////////////////////////////////////////
// js 추가 방법 var mysqlConfig = require('./mysql_config.js');
//////////////////////////////////////////////////////////////////////


//var myIp = '127.0.0.1';
var myPort = 80; //webPort

var app = express();
/* jade를 사용하지 않는다.
app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', './views');
*/
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
//app.use(session({secret: '12312dajfj23rj2po4$#%@#',resave: false,saveUninitialized: true}));
//db연결

var router = require('./router/main')(app);


//var http = require('http');
//var https = require('https');

app.set('views', __dirname + '/public/'); //인덱스 html 찾는다
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public')); //정적인 파일 public를 서비스할수있다.

app.use('/node_modules',express.static('node_modules'));

//res.redirect('http://google.com');

//app.locals.pretty = true; //html을 이쁘게 뿌려준다.
//app.use(express.static('public')); //정적인 파일 public를 서비스할수있다.


app.listen(myPort, myIp,function(){
  console.log('Web Conneted complete 80 port');
});
