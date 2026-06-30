import { useState } from "react";

export default function LocalStateVariable() {
  // 일반 변수 선언
  let normalVariableCount = 0;

  // 지역 상태 선언
  const [localStateCount, setLocalStateCount] = useState(0);

  // 일반 변수 증가
  const handleIncrementNormalVariable = () => {
    normalVariableCount += 1;
  };

  // 지역 상태 증가
  const handleIncrementLocalState = () => {
    setLocalStateCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <div>
        <h3>일반 변수 카운터</h3>
        <p>값: {normalVariableCount}</p>{" "}
        <button type="button" onClick={handleIncrementNormalVariable}>
          일반 변수 증가
        </button>
        <p style={{ fontSize: "0.9em", color: "gray" }}>
          (버튼을 클릭해도 화면의 값은 변하지 않지만, 콘솔에서는 값이 증가하는
          것을 확인할 수 있습니다.)
        </p>
      </div>

      <hr style={{ margin: "20px 0" }} />

      <div>
        <h3>지역 상태 카운터 (useState)</h3>
        <p>값: {localStateCount}</p>{" "}
        <button type="button" onClick={handleIncrementLocalState}>
          지역 상태 증가
        </button>
        <p style={{ fontSize: "0.9em", color: "gray" }}>
          (버튼을 클릭하면 화면의 값이 변경되고 컴포넌트가 리렌더링됩니다.)
        </p>
      </div>

      <div
        style={{
          marginTop: "20px",
          padding: "10px",
          border: "1px solid #eee",
          backgroundColor: "#f9f9f9",
        }}
      >
        <h4>설명:</h4>
        <p>
          <strong>
            일반 변수 (<code>normalVariableCount</code>):
          </strong>{" "}
          컴포넌트가 리렌더링될 때마다 <code>0</code>으로 다시 초기화됩니다.
          값을 변경해도 리액트는 이를 감지하지 못해 UI가 업데이트되지 않습니다.
        </p>
        <p>
          <strong>
            지역 상태 (<code>localStateCount</code>):
          </strong>{" "}
          <code>useState</code>로 관리되며, 값이 변경 (
          <code>setLocalStateCount</code> 호출)되면 리액트가 리렌더링을
          유발합니다. 리렌더링 사이에도 값이 유지됩니다.
        </p>
      </div>
    </div>
  );
}
