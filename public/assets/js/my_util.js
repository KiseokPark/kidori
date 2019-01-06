/*쿠키값 및

 사이드바 제공*/

function deleteCookie (name){

  var delConfirm = confirm('Do you want to sign out?');
  if (delConfirm) {
    alert('Sign out successful');
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    window.location.href = "/";
  }
}
function getCookie (name){
  var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return value? value[2] : null;
};



$(document).ready(function(){
$("#loginBtn").html("Welcome, " + getCookie('user_id') + "</span></a></li>"); //로그아웃 버튼 설정
/* sidebar */
$('#sidebar').append(''+
'<div class="inner">    '+
'    <nav id="menu">    '+
'      <header class="major">    '+
'        <h2>Menu</h2>    '+
'      </header>    '+
'      <ul>    '+
'        <li><a href="/">HOME</a></li>    '+
'        <li>    '+
'          <span class="opener">Ethereum</span>    '+
'          <ul>    '+
'            <li><a href="/etherInfo">What is Ethereum</a></li>    '+
'            <li><a href="/etherSend">Smart Contract TEST</a></li>    '+
'            <li><a href="/etherScan">Ethereum Scan</a></li>    '+
'          </ul>    '+
'        </li>    '+
'        <li>    '+
'          <span class="opener">Hyperledger Fabric</span>    '+
'          <ul>    '+
'            <li><a href="#">What is Hyperledger</a></li>    '+
'            <li><a href="hyper_contract.html">Chain Code TEST</a></li>    '+
'            <li><a href="#">Hyperledger Scan</a></li>    '+
'          </ul>    '+
'        </li>    '+
'        <li>    '+
'          <span class="opener">IPFS</span>    '+
'          <ul>    '+
'            <li><a href="/ipfsInfo">What is IPFS</a></li>    '+
'            <li><a href="/ipfsUpload">IPFS File Upload</a></li>    '+
'            <li><a href="/ipfsScan">IPFS Scan</a></li>    '+
'          </ul>    '+
'        </li>    '+
'    '+
'      </ul>    '+
'    </nav>    '+
'    <section>    '+
'      <header class="major">    '+
'        <h2>Contact address</h2>    '+
'      </header>    '+
'      <ul class="contact">    '+
'        <li class="fa-envelope-o"><a href="#">black9817@gmail.com</a></li>    '+
'        <li class="fa-phone">010-4892-xxxx</li>    '+
'        <li class="fa-home">Geumcheon-gu, Seoul, Republic of Korea<br /></li>    '+
'      </ul>    '+
'    </section>    '+
'    '+
'  <!-- Footer -->    '+
'    <footer id="footer">    '+
'      <p class="copyright">&copy; Untitled. All rights reserved. </p>    '+
'    </footer>    '+
'    '+
'  </div>    ');



var $menu = $('#menu'),
  $menu_openers = $menu.children('ul').find('.opener');

// Openers.
  $menu_openers.each(function() {

    var $this = $(this);

    $this.on('click', function(event) {

      // Prevent default.
        event.preventDefault();

      // Toggle.
        $menu_openers.not($this).removeClass('active');
        $this.toggleClass('active');
      // Trigger resize (sidebar lock).
        $(window).triggerHandler('resize.sidebar-lock');
    });
  });








});
