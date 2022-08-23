// 220729 답글 입력하면 자식요소로 들어감
// 자식 요소 넣는 것이 어려워 코드 짜는데 다른 조원의 도움을 받음
// htML에는  <div class="inputText"></div> DIV 요소가 들어갈 수 있도록 DIV를 만들어 놓음
let answerBtn = document.querySelectorAll('.answerBtn');
for(let i=0; i<answerBtn.length; i++){
        answerBtn[i].addEventListener("click",function(){
            // createElement는 요소 노드를 만들어주는 메서드
            // div를 만들었음
        const div2 = document.createElement('div');
        const now_time_text = document.createElement('p');
        const input_atr = document.createAttribute('id');
        const now_time = new Date();
        //createAttribute 속성을 추가 스타일, 아이디, 클래스값을 부여해줌
        input_atr.value = 'inputTextBox';
        // 해당 key의 id 이름 지정
        // div id이름을 inputTextBox로 지정하여 css 설정
        div2.setAttributeNode(input_atr);
        // append는 만들어놓은 속성을 연결 
        div2.append(document.createTextNode(this.parentNode.children[0].value));
        // this를 사용하므로써 프로퍼티 추적 해당 영역에서만 글을 작성하면 댓글달릴 수 있도록
        // 버튼이 배열이기 때문에 
        now_time_text.append(now_time.getFullYear()+"."+Number(now_time.getMonth()+1)+"."+now_time.getDate()+" "+now_time.getHours()+":"+now_time.getMinutes());
        this.parentNode.parentNode.children[2].append(div2);
        this.parentNode.parentNode.children[2].append(now_time_text);
        
        // 답글을 담고 있는 parentNode, 댓글을 담고 있는 parentNode
        // 배열이기 때문에 3번째 요소에 div2를 넣겠다는 의미
        this.parentNode.children[0].value = '';
        // input 내용을 초기화 해줌

});
}