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
