const main_calendar_month = document.querySelector(".main_calendar_table > tbody");

// 이벤트 추가 모달
const event_add_container = document.querySelector(".arrow_arrow");
const event_add_container_arrow = document.querySelector(".arrow_arrow > div:first-child");

// 이벤트 추가 타이틀 입력
const event_add_title_input = document.querySelector(".arrow_title_or_color_container > input");

// 이벤트 추가 메모 입력
const event_add_memo_textarea_container = document.querySelector(".arrow_memo");

// 이벤트 추가 메모 textarea
const event_add_memo_textarea = document.querySelector(".arrow_memo > textarea")

// 이벤트 색상 선택 박스 버튼
const back_ground_color_container = document.querySelector(".back_ground_color_container");

// 이벤트 색상 선택 박스
const color_select_container = document.querySelector(".arrow_title_or_color_container > ul");

// 이벤트 색상 선택
const color_selecter = document.querySelectorAll(".arrow_title_or_color_container > ul > li");

// 이벤트 기간 및 시간 박스
const event_add_datetime_container = document.querySelector(".arrow_datetime_container");

// 이벤트 시간 설정 박스
const event_add_datetime_box = document.querySelector(".arrow_datetime_container > div");

// 상단 일 달력 버튼
const day_btn = document.querySelector("#day_btn");
const day_btn_color = document.querySelector("#day_btn ~ label > div");

// 상단 주 달력 버튼
const week_btn = document.querySelector("#week_btn");
const week_btn_color = document.querySelector("#week_btn ~ label > div");

// 상단 월 달력 버튼
const month_btn = document.querySelector("#month_btn");
const month_btn_color = document.querySelector("#month_btn ~ label > div");

// 월 달력
const main_month_calendar_page = document.querySelector(".main_month_calendar_page");

// 주 달력
const main_week_calendar_page = document.querySelector(".main_week_calendar_page");

// 일 달력
const main_day_calendar_page = document.querySelector(".main_day_calendar_page");

// 이벤트 추가 시작 시간 입력 input
const month_calendar_start_datetime = document.querySelector("#month_calendar_start_datetime");

// 이벤트 추가 종료 시간 입력 input
const month_calendar_end_datetime = document.querySelector("#month_calendar_end_datetime");


// 이벤트 추가 팝업 내리는 함수
function close_event_add() {
    color_select_container.style.animation = "category_select_color_close 0.5s";
    color_select_container.style.transform = "rotateX(90deg)";
    // rotate 애니메이션 끝난 후에 실행
    setTimeout(function () {
        color_select_container.style.display = "none";
    }, 500)
}

let weekday = ["월", , "화", "수", "목", "금", "토", "일"];

main_calendar_month.addEventListener("dblclick", function (e) {
    let tag_right = e.target.getBoundingClientRect().right - 460;
    event_add_container.style.display = "block";
    event_add_container.style.transform = "scale(1)";
    color_select_container.style.display = "none";

    // 사용자가 선택한 날짜 받아와서 일자만 추출
    let day = e.target.parentNode.parentNode.childNodes[1].childNodes[1].innerText.slice(0, -1);

    // 현재 시, 분을 구하기 위한 변수 선언
    let now = new Date();

    // 사용자가 선택한 날짜를 input에 설정한 후 현재 시간 및 분 설정
    if(day.length == 1){
        month_calendar_start_datetime.value = "2018-12-0"+ day +"T" + now.getHours() +":" + now.getMinutes() + "";
        month_calendar_end_datetime.value = "2018-12-0"+ day +"T" + (now.getHours() + 1) +":" + now.getMinutes() + "";
    } else if (day.length == 2){
        month_calendar_start_datetime.value = "2018-12-"+ day +"T" + now.getHours() +":" + now.getMinutes() + "";
        month_calendar_end_datetime.value = "2018-12-"+ day +"T" + (now.getHours() + 1) +":" + now.getMinutes() + "";
    }

    // 시작시간이 종료시간보다 이후일 경우 오류
    if(month_calendar_start_datetime.value > month_calendar_end_datetime.value){

    }

    // 사용자가 선택한 날짜 옆에 이벤트 추가 모달 창을 동적으로 띄우기 위한 조건문
    if(e.target.getBoundingClientRect().top > 200 && e.target.getBoundingClientRect().top < 330 
    && e.target.getBoundingClientRect().right < 1500){
        event_add_container_arrow.style.transform = "rotate(45deg) translateX(-15px)";
        event_add_container_arrow.style.left = 0;
        event_add_container_arrow.style.right = "";
        event_add_container_arrow.style.top = "50%";
        event_add_container.style.top = 75 + "px";
        event_add_container.style.left = tag_right + "px";
    } else if(e.target.getBoundingClientRect().top > 200 && e.target.getBoundingClientRect().top < 330 
    && e.target.getBoundingClientRect().right > 1500){
        event_add_container_arrow.style.transform = "rotate(225deg) translateX(-15px)";
        event_add_container_arrow.style.top = "35%";
        event_add_container_arrow.style.right = 0;
        event_add_container_arrow.style.left = "";
        event_add_container.style.top = 75 + "px";
        event_add_container.style.left = (tag_right - 540) + "px";
    } else if(e.target.getBoundingClientRect().top > 330 && e.target.getBoundingClientRect().top < 450
    && e.target.getBoundingClientRect().right < 1500){
        event_add_container_arrow.style.transform = "rotate(45deg) translateX(-15px)";
        event_add_container_arrow.style.left = 0;
        event_add_container_arrow.style.right = "";
        event_add_container_arrow.style.top = "50%";
        event_add_container.style.top = 195 + "px";
        event_add_container.style.left = tag_right + "px";
    } else if(e.target.getBoundingClientRect().top > 330 && e.target.getBoundingClientRect().top < 450
    && e.target.getBoundingClientRect().right > 1500){
        event_add_container_arrow.style.transform = "rotate(225deg) translateX(-15px)";
        event_add_container_arrow.style.top = "35%";
        event_add_container_arrow.style.right = 0;
        event_add_container_arrow.style.left = "";
        event_add_container.style.top = 195 + "px";
        event_add_container.style.left = (tag_right - 540) + "px";
    }else if(e.target.getBoundingClientRect().top > 460 && e.target.getBoundingClientRect().top < 580
    && e.target.getBoundingClientRect().right < 1500){
        event_add_container_arrow.style.transform = "rotate(45deg) translateX(-15px)";
        event_add_container_arrow.style.left = 0;
        event_add_container_arrow.style.right = "";
        event_add_container_arrow.style.top = "50%";
        event_add_container.style.top = 315 + "px";
        event_add_container.style.left = tag_right + "px";
    } else if(e.target.getBoundingClientRect().top > 460 && e.target.getBoundingClientRect().top < 580
    && e.target.getBoundingClientRect().right > 1500){
        event_add_container_arrow.style.transform = "rotate(225deg) translateX(-15px)";
        event_add_container_arrow.style.top = "35%";
        event_add_container_arrow.style.right = 0;
        event_add_container_arrow.style.left = "";
        event_add_container.style.top = 315 + "px";
        event_add_container.style.left = (tag_right - 540) + "px";
    }else if(e.target.getBoundingClientRect().top > 590 && e.target.getBoundingClientRect().top < 700
    && e.target.getBoundingClientRect().right < 1500){
        event_add_container_arrow.style.transform = "rotate(45deg) translateX(-15px)";
        event_add_container_arrow.style.left = 0;
        event_add_container_arrow.style.right = "";
        event_add_container_arrow.style.top = "50%";
        event_add_container.style.top = 440 + "px";
        event_add_container.style.left = tag_right + "px";
    } else if(e.target.getBoundingClientRect().top > 590 && e.target.getBoundingClientRect().top < 700
    && e.target.getBoundingClientRect().right > 1500){
        event_add_container_arrow.style.transform = "rotate(225deg) translateX(-15px)";
        event_add_container_arrow.style.top = "35%";
        event_add_container_arrow.style.right = 0;
        event_add_container_arrow.style.left = "";
        event_add_container.style.top = 440 + "px";
        event_add_container.style.left = (tag_right - 540) + "px";
    }else if(e.target.getBoundingClientRect().top > 710 && e.target.getBoundingClientRect().top < 820
    && e.target.getBoundingClientRect().right < 1500){
        event_add_container_arrow.style.transform = "rotate(45deg) translateX(-15px)";
        event_add_container_arrow.style.left = 0;
        event_add_container_arrow.style.right = "";
        event_add_container_arrow.style.top = "50%";
        event_add_container.style.top = 560 + "px";
        event_add_container.style.left = tag_right + "px";
    } else if(e.target.getBoundingClientRect().top > 710 && e.target.getBoundingClientRect().top < 820
    && e.target.getBoundingClientRect().right > 1500){
        event_add_container_arrow.style.transform = "rotate(225deg) translateX(-15px)";
        event_add_container_arrow.style.top = "35%";
        event_add_container_arrow.style.right = 0;
        event_add_container_arrow.style.left = "";
        event_add_container.style.top = 560 + "px";
        event_add_container.style.left = (tag_right - 540) + "px";
    }else if(e.target.getBoundingClientRect().top > 840 && e.target.getBoundingClientRect().top < 940
    && e.target.getBoundingClientRect().right < 1500){
        event_add_container_arrow.style.transform = "rotate(45deg) translateX(-15px)";
        event_add_container_arrow.style.left = 0;
        event_add_container_arrow.style.right = "";
        event_add_container_arrow.style.top = "70%";
        event_add_container.style.top = 650 + "px";
        event_add_container.style.left = tag_right + "px";
    } else if(e.target.getBoundingClientRect().top > 840 && e.target.getBoundingClientRect().top < 940
    && e.target.getBoundingClientRect().right > 1500){
        event_add_container_arrow.style.transform = "rotate(225deg) translateX(-15px)";
        event_add_container_arrow.style.top = "55%";
        event_add_container_arrow.style.right = 0;
        event_add_container_arrow.style.left = "";
        event_add_container.style.top = 650 + "px";
        event_add_container.style.left = (tag_right - 540) + "px";
    }

})

// 월달력에서 팝업이 아닌 공간 클릭 시 팝업 내리기
main_calendar_month.addEventListener("click", function (e) {
    event_add_container.style.display = "none";
    event_add_datetime_box.style.display = "none";
    event_add_datetime_container.childNodes[1].style.display = "block";
    event_add_datetime_container.style.margin = "10px 0";
    event_add_datetime_container.style.padding = "10px 0";
    event_add_datetime_container.style.width = "none";
    event_add_datetime_container.style.transform = "translateX(0px)";
})

// 일 주 월 달력 변경
day_btn.addEventListener("click", function () {
    main_day_calendar_page.style.display = "block";
    main_week_calendar_page.style.display = "none";
    main_month_calendar_page.style.display = "none";
    // 색상 변경
    day_btn_color.style.backgroundColor = "rgb(232, 232, 236)";
    week_btn_color.style.backgroundColor = "rgb(245, 245, 249)";
    month_btn_color.style.backgroundColor = "rgb(245, 245, 249)";
})
week_btn.addEventListener("click", function () {
    main_day_calendar_page.style.display = "none";
    main_week_calendar_page.style.display = "block";
    main_month_calendar_page.style.display = "none";
    // 색상 변경
    day_btn_color.style.backgroundColor = "rgb(245, 245, 249)";
    week_btn_color.style.backgroundColor = "rgb(232, 232, 236)";
    month_btn_color.style.backgroundColor = "rgb(245, 245, 249)";
})
month_btn.addEventListener("click", function () {
    main_day_calendar_page.style.display = "none";
    main_week_calendar_page.style.display = "none";
    main_month_calendar_page.style.display = "block";
    // 색상 변경
    day_btn_color.style.backgroundColor = "rgb(245, 245, 249)";
    week_btn_color.style.backgroundColor = "rgb(245, 245, 249)";
    month_btn_color.style.backgroundColor = "rgb(232, 232, 236)";
})

back_ground_color_container.addEventListener("click", function (e) {
    color_select_container.style.display = "block";
    color_select_container.style.animation = "category_select_color_open 0.5s";
    color_select_container.style.transform = "rotateX(0deg)";
})

for (let i = 0; i < color_selecter.length; i++) {
    color_selecter[i].addEventListener("click", function (e) {
        console.dir(this.children[1].childNodes[0].data)
    })
}
event_add_container_arrow.addEventListener("click", function () {
    close_event_add();
})
event_add_title_input.addEventListener("click", function () {
    close_event_add();
})

// 이벤트 추가 시간 선택 버튼 클릭 시
event_add_datetime_container.addEventListener("click", function () {
    close_event_add();
    event_add_datetime_box.style.display = "block";
    event_add_datetime_container.childNodes[1].style.display = "none";

    event_add_datetime_box.style.animation = "event_add_datetime_box_open 1s"
    event_add_datetime_container.style.margin = "15px 0";
    event_add_datetime_container.style.padding = "0";
    event_add_datetime_container.style.width = "298px";
    event_add_datetime_container.style.transform = "translateX(-14.7px)";

    event_add_container_arrow.style.top = "45%";
    event_add_container.style.transform = "translateY(-30px)";
})

event_add_memo_textarea.addEventListener("click", function () {
    close_event_add();
})

event_add_memo_textarea.addEventListener("click", function(){
    close_event_add();
    event_add_datetime_box.style.display = "none";
    event_add_datetime_container.childNodes[1].style.display = "block";
    event_add_datetime_container.style.margin = "10px 0";
    event_add_datetime_container.style.padding = "10px 0";
    event_add_datetime_container.style.width = "";
    event_add_datetime_container.style.height = "";
    event_add_datetime_container.style.transform = "translateX(0px)";
    event_add_datetime_box.style.animation = "event_add_datetime_box_close 0.5s";
})