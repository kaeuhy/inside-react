import { useEffect, useState } from "react";

const ChildComponent = () => {
  console.log("ChildComponent rendered");
  return <div>자녀 컴포넌트</div>;
};

export default function Parent({ children }) {
  const [count, setCount] = useState(0);
  console.log("Parent rendered");

  useEffect(() => {
    const interval = setInterval(() => setCount((c) => c + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <ChildComponent />
      {children}
    </div>
  );
}
