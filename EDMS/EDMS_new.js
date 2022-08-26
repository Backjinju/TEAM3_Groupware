// 긴급 버튼 클릭 시 버튼 이동
let move_btn = document.querySelectorAll(".EDMS_new_impor_btn");
let move_btn_bg = document.querySelectorAll(".EDMS_new_impor");
for(let i=0; i<move_btn.length; i++){
    for(let i=0; i<move_btn_bg.length; i++){
        let flagbtn = false; // 버튼 플래그효과
move_btn[i].addEventListener("click", function(){
     if(flagbtn == true){
        move_btn[i].style.transition='all 0.3s';
        move_btn[i].style.transform='translateX(0%)';
        move_btn_bg[i].style.transition='all 0.3s';
        move_btn_bg[i].style.background='gray';
        flagbtn = !flagbtn;
     }else if(flagbtn == false){
        move_btn[i].style.transition='all 0.3s';
        move_btn[i].style.transform='translateX(137%)';
        move_btn_bg[i].style.transition='all 0.3s';
        move_btn_bg[i].style.background='rgb(13, 110, 253)';
        console.log("dd")
        flagbtn = !flagbtn;
     }
});
}
}