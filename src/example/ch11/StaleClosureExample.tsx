import { useState } from "react";

function StaleClosureExample() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((c) => c + 1);
  };

  const handleLogCount = () => {
    setTimeout(() => {
      console.log(`3초 전의 count 값: ${count}`);
    }, 3000);
  };

  const handleLogLatestCount = () => {
    setTimeout(() => {
      setCount((currentCount) => {
        console.log(`3초 후의 최신 count값: ${currentCount}`);
      });
    }, 3000);
  };
}
