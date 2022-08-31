const id_box = document.querySelector('.login_id'); //id입력되는 전체박스
let id = document.querySelector('#login_id_input'); //id input
const id_input = /^[a-zA-Z0-9]*$/; //id정규화

const pw_box = document.querySelector('.login_pw') //pw입력되는 전체박스
let pw = document.querySelector('#login_pw_input'); //pw input
const pw_input = /(?=.*\d)+(?=.*[~`!@#$%\^&*()-+=])+(?=.*[a-z])(?=.*[A-Z])+.{1,}$/; //pw정규화

const submit_btn = document.querySelector('.login_submit'); //접속 버튼 

const save_btn = document.querySelector('#login_save_id_checkbox');

submit_btn.addEventListener("click", function () { //접속 클릭시 
    if (id.value.length == 0 || id_input.test(id.value) != true) { //id 0글자이거나 영문,숫자의 조합이 아닐때 
        id_box.style.border = "1px solid red"; //id입력되는 전체박스의 테두리가 빨갛게 되고
        id_box.style.animation = "inputWrong .2s"; //살짝 움직이는 애니메이션을 줬음
        setTimeout(function () {
            id_box.style.animation = "";
        }, 200); //200미리초 후에 애니메이션 삭제 
    } else if (id_input.test(id.value) == true) { //id정규화가 맞을시
        if (pw.value.length == 0 || pw_input.test(pw.value) != true) { //pw 0글자이거나 Aa1!의 조합이 아닐때 
            pw_box.style.border = "1px solid red"; //pw입력되는 전체박스의 테두리가 빨갛게 되고
            pw_box.style.animation = "inputWrong .2s"; //살짝 움직이는 애니메이션을 줬음
            setTimeout(function () {
                pw_box.style.animation = "";
            }, 200); //200미리초 후에 애니메이션 삭제 


//  *********************** db와 일치할 시 라는 조건추가해야함 
        } else if (pw_input.test(pw.value) == true) { //id와 pw 정규화 맞을때 (나중에 db와 일치할때 라는 조건 추가할거임)
            location.href = "/home.html" //home 화면으로 이동 
        }
    }


    id.addEventListener("click", function () { //id입력되는 전체박스 클릭시
        id_box.style.border = "none"; //테두리 원래대로 
    })
    pw.addEventListener("click", function () { //pw입력되는 전체박스 클릭시 
        pw_box.style.border = "none"; //테두리 원래대로 
    })
});





submit_btn.addEventListener("click", function(){

    let user_id = new Array();
if (window.localStorage.getItem("user_id") === null) { // 만약 페이지를 처음 방문한다면 null값으로 되어 있어 확인 후
    window.localStorage.setItem("user_id", JSON.stringify(user_id)); // 첫 방문이라면 빈 배열로 초기화
}else {
    user_id = JSON.parse(window.localStorage.getItem('user_id'));
}
    console.log(id.value);
    user_id.push(id.value);
    console.log(user_id);
    if(save_btn.checked == true){
        window.localStorage.setItem("user_id", JSON.stringify(user_id));
    }
})

//id저장을 누르면 user_id[마지막인덱스]가 로컬스토리지에 저장 (id.value로서)

// save_btn.addEventListener('change', function(e){
//     if(e.currentTarget.checked) {
//         alert('asdasd');
//         id.value = user_id[user_id.length-1];
//         alert('asdasd');
//     }
// })

