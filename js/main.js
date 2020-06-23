// 리사이즈 이벤트리스너
window.onresize = chkSize;
function chkSize(e){
    console.log(window.innerWidth);
    // 브라우저 너비
    var width = window.innerWidth;
    var boxs = document.getElementsByClassName("album_box");

    var sec_album = document.getElementById("sec_album");
    
    
    // 화면 작아질 경우
    if (width <= 1075) {
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