// 리사이즈 이벤트리스너
window.onresize = chkSize;
function chkSize(e){
    console.log(window.innerWidth);
    // 브라우저 너비
    var width = window.innerWidth;
    var sec_album = document.getElementById("sec_album");
    var boxs = document.getElementsByClassName("album_box");

    // 화면 작아질 경우
    if (width <= 1075 && width > 455)  {
        for(var i = 0 ; i < boxs.length; i++) {
            boxs[i].children[0].firstElementChild.style.width = "100px";
            boxs[i].children[0].firstElementChild.style.height = "100px";
            boxs[i].style.fontSize = "12px";
            boxs[i].style.width = "135px";
            boxs[i].style.height = "180px";
            // 섹션
            sec_album.style.paddingLeft = "8%";
            sec_album.style.paddingRight = "8%";
        }
    } else if (width <=455 ) {
        for(var i = 0 ; i < boxs.length; i++) {
            boxs[i].children[0].firstElementChild.style.width = "50px";
            boxs[i].children[0].firstElementChild.style.height = "50px";
            boxs[i].style.fontSize = "12px";
            boxs[i].style.width = "120px";
            boxs[i].style.height = "150px";
            // 섹션
            sec_album.style.paddingLeft = 0;
            sec_album.style.paddingRight = 0;
        }
    } else {    // 화면 크면 원상복구
        for(var i = 0 ; i < boxs.length; i++) {
            boxs[i].children[0].firstElementChild.style.width = "170px";
            boxs[i].children[0].firstElementChild.style.height = "170px";
            boxs[i].style.fontSize = "16px";
            boxs[i].style.width = "218px";
            boxs[i].style.height = "324px";
            // 섹션
            sec_album.style.paddingLeft = "12%";
            sec_album.style.paddingRight = "12%";
        }
    }
}


// mainOpacityToggle
function mainOpacityToggle() {
    headerbarToggle();
    topButtonToggle();
}
// headerbarToggle
function headerbarToggle() {    
    var headerbar = document.getElementById("headerbar");
    var currentScrollPos = window.pageYOffset; // current Y offset
    if (0 < currentScrollPos) {
        headerbar.style.opacity = 0.0;  
    } else {        
        headerbar.style.opacity = 1;   
    }
}
// topButtonToggle
function topButtonToggle() {
    var top_btn = document.getElementById("top_btn");
    var currentScrollPos = window.pageYOffset; // current Y offset
    var height = document.body.scrollHeight;

    if ( currentScrollPos >= height/3  ) {
        top_btn.style.opacity = 1;  
    } else {        
        top_btn.style.opacity = 0;   
    }
}

function descConfirm() {
    var val = prompt("제 휴대폰 가운대 4자리를 입력해주세요.");
    if (val == 7577) {
        window.open('about:_blank').location.href='./careerstatement.html'
    } else {
        return;
    }
}

function wrapWindowByMask(){
    //화면의 높이와 너비를 구한다.
    var maskHeight = $(document).height();  
    var maskWidth = $(window).width();  
    
    //마스크의 높이와 너비를 화면 것으로 만들어 전체 화면을 채운다.
    $('#mask').css({'width':"100%",'height':maskHeight});  
    $('#mask_btn').fadeIn(1000);

    //애니메이션 효과
    //$('#mask').fadeIn(1000);      
    $('#mask').fadeTo("slow",0.8);    

    //윈도우 같은 거 띄운다.
    $('.window').css( {'color': 'white' } );
    $('.window').show();
}
jQuery(document).ready(function(){ 

    //닫기 버튼을 눌렀을 때
    $('.window .close').click(function (e) {  
        //링크 기본동작은 작동하지 않도록 한다.
        e.preventDefault();  
        $('#mask, .window').hide();  
    });       

    //검은 막을 눌렀을 때
    $('#mask').click(function () {  
        $(this).hide();  
        $('.window').hide();  
    });
});
