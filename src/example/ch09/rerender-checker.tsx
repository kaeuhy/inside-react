// props.children으로 전달될 컴포넌트
export default function RerenderChecker() {
  console.log("RerenderChecker rerendered");
  return <div>props.children 컴포넌트</div>;
}
