var Web3 = require("web3");
web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/"));
var proofContract = web3.eth.contract([
	{
		"constant": false,
		"inputs": [
			{
				"name": "x",
				"type": "string"
			}
		],
		"name": "set",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "get",
		"outputs": [
			{
				"name": "retVal",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]);

var proof = proofContract.at("0x3f627a1a9f2ac517d3e00d1ca8a0b983a4385da2");


window.addEventListener('load', function() {

  // Web3가 브라우저에 주입되었는지 확인(Mist/MetaMask)
  if (typeof web3 !== 'undefined') {
    // Mist/MetaMask의 프로바이더 사용
    web3js = new Web3(web3.currentProvider);
  } else {
    // 사용자가 Metamask를 설치하지 않은 경우에 대해 처리
    // 사용자들에게 Metamask를 설치하라는 등의 메세지를 보여줄 것
  }


  startApp()

});
/*
    var test_net_url = "https://rinkeby.infura.io/";
    //var test_net_url = "https://rinkeby.infura.io/71688ae115a84a2396bfd0d568f4aec0"; //infura는 왜 사용하것일까? 시발
    var web3 = new Web3(new Web3.providers.HttpProvider(test_net_url));
    //web3.eth.defaultAccount = '0x55B4dEbAe447Ea82BFEdaAD0002e79F521CeADe1';
    //web3.eth.defaultAccount = web3.eth.accounts [0];
    //alert(web3.eth.accounts[0]);
    //personal.unlockAccount(web3.eth.defaultAccount);
    var proofContract = web3.eth.contract([
	{
		"constant": false,
		"inputs": [
			{
				"name": "x",
				"type": "string"
			}
		],
		"name": "set_test",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "get_test",
		"outputs": [
			{
				"name": "retVal",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]);
    var contract_address = "0x0820f7cd72cf0e9921af8674e1e8fd53aaa264dc";
    //proofContract.web3.eth.defaultAccount=proofContract.web3.eth.coinbase;
    var myContract = proofContract.at(contract_address);
    //myContract.web3.eth.defaultAccount=myContract.web3.eth.coinbase;
    //myContract.set ("please").send();
  //  myContract.set_test("please").send();
    //vc.addCandidate(candidate,{from:account,gas:2000000},function(err,result){ if(!err) alert("트랜잭션이 성공적으로 전송되었습니다.|n"+result)});

    //myContract.set_test("please").send({from: '0x55B4dEbAe447Ea82BFEdaAD0002e79F521CeADe1'});
    alert(myContract.get_test());

    var account = "0x55B4dEbAe447Ea82BFEdaAD0002e79F521CeADe1";
web3.eth.defaultAccount = account;
  myContract.set_test("please",{from:account,gas:2000000},function(err,result){ if(!err) alert("트랜잭션이 성공적으로 전송되었습니다.|n");else{alert(err);}});
    //myContract.set_test("please",function(err,result){ if(!err) alert("트랜잭션이 성공적으로 전송되었습니다.|n")});
    alert('3');
*/
