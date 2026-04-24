import { useEffect, useState } from "react";

const Child = ({ value }) => {
  return <div>Child (props: {value})</div>;
};

export default function Parent() {
  const [time, setTime] = useState(new Date());
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Parent Component</h1>
      <p>현재 시간: {time.toLocaleTimeString()}</p>

      <button type="button" onClick={() => setCount(count + 1)}>
        Count 증가 (자식 prop 변경)
      </button>

      <Child value={count} />
    </div>
  );
}
