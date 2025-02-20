// 배경 이미지 변경
const images = [
  "./img/back1m.jpg",
  "./img/back2a.jpg",
  "./img/back3e.jpg",
  "./img/back4n.jpg",
  "./img/back5w.jpg",
  "./img/back6c.jpg",
];

// 배경 이미지 랜덤 선택
const randomImg = images[Math.floor(Math.random() * images.length)];
document.body.style.backgroundImage = `url(${randomImg})`;

// 현재 날짜
function date_up() {
  const today = new Date();
  const year = today.getFullYear(); //년
  const month = today.getMonth() + 1; //월
  const dates = today.getDate(); //일

  const dateElement = document.getElementById("dates"); // HTML 요소 선택
  dateElement.innerHTML = `${year} / ${month} / ${dates}`;
}
date_up();

// 현재 시간 표시할 요소 가져오기
const times = document.getElementById("time");

// 현재 시간 실시간 업데이트
setInterval(() => {
  const today = new Date(); //현재 날짜 가져요기
  const h = today.getHours(); //현재 시간 가져요기
  const m = today.getMinutes(); //현재 분 가져요기

  // 현재 시:분 화면에 보여주기 - 분이 10보다 작으면 앞에 0 추가
  times.innerHTML = `${h} : ${m < 10 ? "0" + m : m}`;
}, 1000);

// 브라우저 실행될 때 저장된 할 일 불러오기
document.addEventListener("DOMContentLoaded", loadTodos);

// 할 일 추가 함수
function addTodo() {
  let inputBox = document.getElementById("input_box"); // 입력창 가져오기
  let todoText = inputBox.value.trim(); // 입력에 공백 제거
  if (todoText === "") {
    alert("할 일을 입력하세요!"); // 입력이 없으면 알림
    return;
  }

  let todos = JSON.parse(localStorage.getItem("todos")) || []; // 저장된 할 일 가져오기
  let newTodo = {
    title: todoText, // 할 일 내용
    checked: false, // 완료 여부 - 초기값 false
  };
  todos.push(newTodo); // 새로운 할일 배열에 추가
  localStorage.setItem("todos", JSON.stringify(todos)); // 로컬스토리지에 저장

  inputBox.value = ""; // 입력창 초기화
  loadTodos(); // 할 일 목록 화면 업데이트
}

// 할 일을 화면에 보여주는 함수
function loadTodos() {
  let list = document.getElementById("todo_list");
  list.innerHTML = ""; // 기존 목록 초기화
  let todos = JSON.parse(localStorage.getItem("todos")) || []; // 저장된 데이터 가져오기

  todos.forEach((todo, index) => {
    let li = document.createElement("li"); // li 생성

    let check = document.createElement("input"); // 체크박스 생성
    check.type = "checkbox";
    check.checked = todo.checked; // 저장된 체크 상태 반영
    check.addEventListener("change", () => {
      todos[index].checked = check.checked; // 체크 상태 변경
      localStorage.setItem("todos", JSON.stringify(todos)); // 변경된 내용 저장
      li.classList.toggle("completed", check.checked); // 체크시 스타일 변경
    });

    let span = document.createElement("span"); // 할 일 내용 표시할 요소 생성
    span.textContent = todo.title;

    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "del");
    deleteBtn.textContent = "X";
    deleteBtn.onclick = () => {
      todos.splice(index, 1); // 배열에서 해당 할 일 제거
      localStorage.setItem("todos", JSON.stringify(todos)); // 변경된 목록 저장
      loadTodos(); // 화면 업데이트
    };

    li.appendChild(check); // 체크박스 추가
    li.appendChild(span); // 할 일 내용 추가
    li.appendChild(deleteBtn); // 삭제 버튼 추가
    list.appendChild(li); // 리스트 추가
    li.classList.toggle("completed", todo.checked); // 완료된 항목이면 스타일 적용
  });
}

// 시간대별로 인사말 변경
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("greeting").textContent = getGreeting();
});

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) {
    return "Good morning!";
  } else if (hour < 18) {
    return "Good afternoon!";
  } else {
    return "Good evening!";
  }
}

// 투두리스트 클릭 애니
$(document).ready(() => {
  $("#todo_img").on("click", () => {
    $("#todo_container").fadeToggle(1000);
  });
});

//푸터 명언
const sayings = [
  "언제나 현재에 집중할수 있다면 행복할것이다.  -파울로 코엘료",
  "피할수 없으면 즐겨라  –로버트 엘리엇",
  "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다.  -단테",
  "자신감 있는 표정을 지으면 자신감이 생긴다.  -찰스다윈",
  "평생 살 것처럼 꿈을 꾸어라.그리고 내일 죽을 것처럼 오늘을 살아라.  –제임스 딘",
  "고개 숙이지 마십시오. 세상을 똑바로 정면으로 바라보십시오.  -헬렌 켈러",
];

// 명언 랜덤 선택
const randomsaying = sayings[Math.floor(Math.random() * sayings.length)];
document.getElementById("foot").textContent = randomsaying;
