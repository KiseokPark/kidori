pragma solidity ^0.4.18;
contract ether_SC{

    struct User{
        address[] myAddress;
        string[] myMessage;
        string[] myEmail;
        string[] inputDate;
    }
    mapping(string => User) userStruct;

    function setData(string _id, string _message, string _email, string _date) public{
        userStruct[_id].myAddress.push(msg.sender);
        userStruct[_id].myMessage.push(_message);
        userStruct[_id].myEmail.push(_email);
        userStruct[_id].inputDate.push(_date);
    }

    function getCnt(string _id) view returns(uint){
       return  userStruct[_id].myAddress.length;
    }

   function getData(string _id, uint cnt) view public returns(string){
        var get_data =userStruct[_id];
        return get_data.myMessage[cnt];
    }



}
