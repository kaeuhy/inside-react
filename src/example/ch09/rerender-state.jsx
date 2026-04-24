import { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
};

export default function RerenderState() {
  const [count, setCount] = useState(0);

  const [reducerState, dispatch] = useReducer(reducer, { count: 0 });

  // toggle의 현재 값이 필요 없고 오직 set 함수만 필요한 경우 다음과 같이 사용
  const [, setToggle] = useState(false);

  const forceUpdate = () => setToggle((prev) => !prev);

  return (
    <div>
      <h2>함수형 컴포넌트</h2>
      <div>
        <h3>useState 예제</h3>
        <p>Count: {count}</p>
        <button type="button" onClick={() => setCount(count + 1)}>
          증가
        </button>
      </div>

      <div>
        <h3>예제</h3>
        <p>Count: {reducerState.count}</p>
        <button type="button" onClick={() => dispatch({ type: "increment" })}>
          증가
        </button>
      </div>
    </div>
  );
}
