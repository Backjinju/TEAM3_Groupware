const modal = document.querySelector('.message_modal');
const btnOpenPopup = document.querySelector('.message_btn-open-popup');

// 22/08/22 김정치 모달창 띄우기
btnOpenPopup.addEventListener('click', () => {
    modal.style.display = 'block';
});

// 모달 on
body.style.overflow = 'hidden';

// 모달 off
body.style.overflow = 'auto';