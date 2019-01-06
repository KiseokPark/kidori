module.exports = function(app)
{
  var myConfig  = require('../config/myConfig.json');
  var myIp = myConfig.ipfsIp;
  var ipfsAPI = require('ipfs-api');
  var ipfs = ipfsAPI(myIp,'5001',{protocol:'http'});
  var multer = require('multer');
  var upload = multer({dest:'./uploads/',limits: { fileSize: 5 * 1024 * 1024 }});
  var fs = require('fs');
  var con = require('../lib/db');
/* 데이터베이스 연결*/

/* 시작 기본값 홈페이지 root 쿠키값있으면 index 없으면 login*/
    app.get('/',function(req,res){
        if(req.cookies.user_id != null || req.cookies.user_id  ==""){
          res.render('index.html');
          //console.log(req.session.user_id);
        }
        else{
          res.render('login.html');
        }
     });
/* 로그인 하는 페이지 */
    app.get('/login',function(req,res){
        res.render('login.html');
    });
/* 값을 post로 이더리움 네트워크 스마트컨트렉트로 SET 할 때 */
    app.post('/etherSend', function(req,res){
        res.render('eth_contract.html');
    });
/* get으로 받음 그냥 클릭했을때 스마트컨트렉트 화면 */
    app.get('/etherSend', function(req,res){
        res.render('eth_contract.html');
    });
/*  이더리움네트워크에서 데이터 가져오는 화면 */
    app.get('/etherScan', function(req,res){
        res.render('eth_scan.html');
    });
/* 이더리움 소개 */
    app.get('/etherInfo', function(req,res){
        res.render('eth_info.html');
    });
/* IPFS 소개 */
    app.get('/ipfsInfo', function(req,res){
        res.render('ipfs_info.html');
    });
/* IPFS로 파일 업로드 */
    app.get('/ipfsUpload', function(req,res){
        res.render('ipfs_upload.html');
    });
/* IPFS에서 파일 가져오는 화면 */
    app.get('/ipfsScan', function(req,res){
        res.render('ipfs_scan.html');
    });

//ipfs로 데이터 블록체인 + 파일 추가
    app.post('/ipfsUpload',upload.single('userfile'),function(req,res){
        //console.log(req.file);
      var file_data = req.file;
      var file_originalname = req.file.originalname;
      var testFile = fs.readFileSync('./uploads/'+file_data['filename']);

      ipfs.add(testFile,function(err,hash){
        if(err) throw err;
        const data = hash[0];
        ipfs_hash = data.hash;
        var userId = req.cookies.user_id;
        file_name = file_data['filename'];
        var sqlsetMemReg = 'insert into data(file_name,ipfs_hash,user_id,file_original_name) values("'+file_name+'","'+ipfs_hash+'","'+userId+'","'+file_originalname+'")';
        con.query(sqlsetMemReg,function(err, rows, fields){
          if(err){
            console.log(err);
          }
          else {
            var responseData = {'result': 'success' };
            res.json(responseData);
          }
        });
        //return console.log(hash)});
      });
    });

    /* File 찾기*/
  app.post('/ipfsScan', function (req,res){
    var userId = req.cookies.user_id;
    var sql = 'select * from data where user_id="'+userId+'"';
    con.query(sql,function(err, rows, fields){
      if(err){
        console.log(err);
      }
      else {
        //var responseData = {'result': rows };
        res.send({fileList: rows});
        //console.log(fields);
        //console.log(rows);

      }
    });
  });
/* 유저검색 */
  app.post('/userCheck', function (req,res){

    var sql = 'select * from user where user_id="'+req.body.s_id+'" AND user_password="'+req.body.s_password+'"';
    con.query(sql,function(err, rows, fields){
      if(err){
        console.log(err);
      }
      else {
        var responseData;
        if(rows.length==1){
            res.cookie('user_id',rows[0].user_id);
            //responseData={'result': '환영합니다.' };
            //res.json(responseData);
            res.redirect('/');
        }
        else{
          //var responseData={'result': '없는 아이디 또는 비밀번호가 틀렸습니다.' };
          //res.json(responseData);
          res.redirect('/login?error=true');
        }

      }
    });
  });


/* USER 등록 */
    app.post('/userReg', function (req,res){
      var sql = 'insert into user (user_id, user_password) values("'+req.body.id+'","'+req.body.password+'")';
      con.query(sql,function(err, rows, fields){
        if(err){
          console.log(err);
        }
        else {
          var responseData = {'result': 'Welcome to Kidori-Homepage' };
          res.json(responseData);
        }
      });
    });
/* C에있는 Log 찾아서 뿌려주기 */
  app.post('/etherScan', function (req,res){
    var path ='C:/KSportfolio/public/etherLog';
    fs.readdir(path, function(error, file_list){
      res.send({filelist:file_list});
    });
  });



  /*USER ID-Password 체크를 한다.
      app.post('/userCheck', function (req,res){
        console.log(req.body.s_id);
        var sql = 'select * from user where user_id="'+req.body.s_id+'" AND user_password="'+req.body.s_password+'"';
        con.query(sql,function(err, rows, fields){
          if(err){
            console.log(err);
          }
          else {
            var responseData;
            if(rows.length==1){
              responseData = {'result': rows[0].user_id + ' 님 환영합니다.' }; //원래 rows[i] for문 돌려서 해야하지만(select* 이니깐) id는 유일값이라서 간단하게 [0]으로 표현!
              req.session.user_id = rows[0].user_id;
              req.session.save(() => {
                res.redirect('/welcome');
              });

            }
            else{
              responseData = {'result': '없는 아이디 또는 비밀번호가 틀렸습니다.' };
            }
            res.json(responseData);
          }
        });
      });
  */

}
