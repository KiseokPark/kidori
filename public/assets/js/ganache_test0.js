function checkNull(){
  if($("#inputDate").val() != '' &&  $("#userId").val() != '' && $("#userMessage").val() != '' && $("#userEmail").val()){
    alert($("#userId").val() + ' 스마트 컨트렉트 시작');
    setData('set');
  }else{
    alert('빈칸을 채워주세요');
  }
}
function getCnt(id){

}
/*
window.addEventListener('load', function() {
  if (typeof web3 !== 'undefined') {
    console.log('web3 is enabled')
    if (web3.currentProvider.isMetaMask === true) {
      console.log('MetaMask is active')
    } else {
      console.log('MetaMask is not available')
    }
  } else {
    console.log('web3 is not found')
  }
});
*/
function setData(state){
/*
  if (typeof web3 !== 'undefined') {
  // web3 = new Web3(web3.currentProvider);
    //web3 = new Web3(new Web3.providers.HttpProvider("http://192.168.25.3:3005"));
    web3 = new Web3(new Web3.providers.HttpProvider("http://211.58.31.124:3005"));
  }
  else{
  // set the provider you want from Web3.providers
    //web3 = new Web3(new Web3.providers.HttpProvider("http://192.168.25.3:3005"));
    web3 = new Web3(new Web3.providers.HttpProvider("http://211.58.31.124:3005"));

  }
  */
  web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));


  web3.eth.defaultAccount = web3.eth.accounts[0];

  var kidolSC = web3.eth.contract([
	{
		"constant": false,
		"inputs": [
			{
				"name": "_id",
				"type": "string"
			},
			{
				"name": "_message",
				"type": "string"
			},
			{
				"name": "_email",
				"type": "string"
			},
			{
				"name": "_date",
				"type": "string"
			}
		],
		"name": "setData",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_id",
				"type": "string"
			}
		],
		"name": "getCnt",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_id",
				"type": "string"
			},
			{
				"name": "cnt",
				"type": "uint256"
			}
		],
		"name": "getDate",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_id",
				"type": "string"
			},
			{
				"name": "cnt",
				"type": "uint256"
			}
		],
		"name": "getEmail",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_id",
				"type": "string"
			},
			{
				"name": "cnt",
				"type": "uint256"
			}
		],
		"name": "getMessage",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]).at('0x8bf6aa0c3ea8357f03f9357ceee8c6ed591b543d');
  if(state=='set'){
    kidolSC.setData($("#userId").val(), $("#userMessage").val(), $("#userEmail").val() , $("#inputDate").val(),{from: web3.eth.accounts[1], gas:3000000}); //4개 날려야됨
    alert('완료');
  }
  else if (state=='get'){
    kidolSC.getData();
  }
  else
    alert('스마트 계약에서 Error 발생 ');
}
/*
kidolSC.getInstructor(function(error, result){
        if(!error)
            {
            console.log(result);
            }
        else
            console.error(error);
});
kidolSC.setInstructor('fdfds', 18);
*/
$("#button").click(function() {
            //Coursetro.setInstructor($("#name").val(), $("#age").val());
//            kidolSC.setInstructor('fdfds', $("#age").val());
});
