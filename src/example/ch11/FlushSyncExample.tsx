// import { useState } from "react";
// import { flushSync } from "react-dom";

// export default function FlushSyncExample() {
//   const [count, setCount] = useState(0);

//   console.log("렌더링 발생, 현재 count:", count);

//   const handleClick = () => {
//     setCount(count + 1);
//     setCount(count + 2);
//     console.log("before flushSync - count 스냅샷:", count);

//     flushSync(() => {
//       setCount((prevCount) => {
//         console.log("inside flushSync - prevCount:", prevCount);
//         return prevCount + 3;
//       });
//       console.log("inside flushSync - count 스냅샷:", count);
//     });
//     console.log("after flushSync - count 스냅샷:", count);
//     setCount(count + 4);
//     console.log("handleClick 함수의 마지막 count 스냅샷:", count);
//   };

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button type="button" onClick={handleClick}>
//         Increment
//       </button>
//     </div>
//   );
// }

export default function FlushSyncExample() {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
    console.log("handleChange - 입력값:", value);
  }

  return (
    <div>
      <input
      type="text"
       onChange={(e) => {
        console.log("onChange 이벤트 발생, 입력값:", e.target.value);
      }}
      ></input>
    </div>
  );
}