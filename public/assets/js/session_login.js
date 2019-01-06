$(function(){
  alert(1);
    //$("#dialog").dialog();
    $(".login_form").dialog({
        alert(2);
        autoOpen:false, //자동으로 열리지않게
        position:[100,200], //x,y  값을 지정
        //"center", "left", "right", "top", "bottom"
        modal:true, //모달대화상자
        resizable:false, //크기 조절 못하게

        buttons:{
            "확인":function(){
                $(this).dialog("close");
            },"취소":function(){
                $(this).dialog("close");
            }
        }
    });

});
