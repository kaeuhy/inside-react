function first() {
  console.log("시작: first()");
  for (let i = 0; i < 1_000_000; i++) {}
  second();
  console.log("종료: first()");
}

function second() {
  console.log("시작: second()");
  for (let i = 0; i < 1_000_000; i++) {}
  third();
  console.log("종료: second()");
}

function third() {
  console.log("시작: third()");
  for (let i = 0; i < 1_000_000; i++) {}
  console.trace("현재 콜 스택:");
  console.log("종료: third()");
}

console.log("프로그램 시작");
const programStart = Date.now();
first();
console.log(` 프로그램 종료 - 총 소요 시간: ${Date.now() - programStart}ms`);
