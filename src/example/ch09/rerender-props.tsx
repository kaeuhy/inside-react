import { useEffect, useRef } from "react";

// 자식 컴포넌트 1
const StaticChild = () => {
  console.log("StaticChild가 리렌더링되었습니다.");
  return <div>Static Child</div>;
};

// 자식 컴포넌트 2
const Child = ({ value }) => {
  console.log(`Child가 리렌더링되었습니다. value: ${value}`);
  return <div>Child Value: {value}</div>;
};

// 부모 컴포넌트
export default function Parent() {
  const propRef = useRef({ value: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      propRef.current.value += 1;
      console.log("ref 값이 업데이트되었습니다.:", propRef.current.value);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  console.log("Parent가 리렌더링되었습니다.");

  return (
    <div>
      <h1>Parent Component</h1>
      <StaticChild />
      <Child value={propRef.current.value} />
    </div>
  );
}
