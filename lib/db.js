var mysql = require('mysql');
var myConfig  = require('../config/myConfig.json');

var con = mysql.createConnection({
host     : myConfig.host,
user     : myConfig.user,
password : myConfig.password,
database : myConfig.database
});

con.connect();
console.log('DB Conneted complete 3306 port');
  /* 데이터베이스 연결*/

module.exports = con;
