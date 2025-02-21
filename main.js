// 배경 이미지 변경
const images = [
  "./img/back1m.jpg",
  "./img/back2a.jpg",
  "./img/back3e.jpg",
  "./img/back4n.jpg",
  "./img/back5w.jpg",
];

// 배경 이미지 랜덤 선택
const randomImg = images[Math.floor(Math.random() * images.length)];
document.body.style.backgroundImage = `url(${randomImg})`;

// 현재 시간
const times = document.getElementById("time");

// 현재 시간 실시간 업데이트
setInterval(() => {
  const today = new Date(); //현재 날짜 가져요기
  const h = today.getHours(); //현재 시간 가져요기
  const m = today.getMinutes(); //현재 분 가져요기

  // 현재 시:분 화면에 보여주기 - 분이 10보다 작으면 앞에 0 추가
  times.innerHTML = `${h} : ${m < 10 ? "0" + m : m}`;
}, 1000); // 현재 시:분 화면에 보여주기

// 추가 버튼
function btn_event() {
  let input1 = document.getElementById("input_box");
  let info = input1.value;

  const info1 = input1.value.trim(); // 입력값 가져오기
  if (info1 === "") return alert("할 일을 입력하세요!");

  // 할일 객체 생성
  const newTodo = {
    title: info,
    checked: false,
    id: Date.now(), // 고유 ID 생성
  };

  input1.value = "";
  todos.push(newTodo); // 배열에 추가

  let newLi = document.createElement("li");
  let span = document.createElement("span");
  span.innerHTML = info;

  //ul에 li를 넣기
  let ul = document.querySelector("ul");

  // 체크박스
  let check = document.createElement("input");
  check.type = "checkbox";
  check.setAttribute("class", "check");

  // 체크박스 변경 이벤트
  check.addEventListener("change", () => {
    newLi.classList.toggle("completed"); // 체크시 스타일 변경
    newLi.check = check.checked; // 배열 상태 변경
  });

  // del 버튼
  let del = document.createElement("button");
  del.setAttribute("class", "del");
  del.innerHTML = "X";

  // del 버튼 이벤트
  del.addEventListener("click", () => {
    document.querySelector("ul").removeChild(newLi);
  });

  // 체크박스 li 넣기
  newLi.appendChild(check);
  // 추가된 할일을 문자로 바꾸어 li 추가
  newLi.appendChild(span);
  // 삭제 후 li 추가
  newLi.appendChild(del);
  //li를 ul에 넣기
  ul.appendChild(newLi);
}
// todo를 localStorage에 저장
function saveToDo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
// 저장되어 있는 todo 지우기
function deleteToDo(e) {
  const li = e.target.parentElement;
  li.remove();

  toDos = toDos.filter((item) => item.id);
  saveToDo(); // 바뀐 내용으로 다시 저장
}
