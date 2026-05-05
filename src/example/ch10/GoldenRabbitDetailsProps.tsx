import { ReactNode } from "react";

interface GoldenTabbitDetailsProps {
  name: string;
  age: number;
  isHidden?: boolean;
}

function GoldenRabbitDetails({
  name,
  age,
  isGidden = false,
}: GoldenTabbitDetailsProps) {
  return (
    <div>
      <h1>{name}</h1>
      <p>AgeL {age}</p>
      <p>Status: {isHidden ? "Hidden" : "Visible"}</p>
    </div>
  );
}

// children의 타입이 ReactNode인 이유는 JSX 사이에 들어갈 수 있는 거의 모든 값을 받아야하기 때문
// 즉, ReactNode는 React가 렌더링 가능한 값들을 모두 포괄하는 유니온 타입
interface GoldenRabbitDetailsWithChildrenProps {
  name: string;
  age: number;
  isHidden?: boolean;
  children: ReactNode;
}

function GoldenTabbitDetailsWithChildren({
  name,
  age,
  isHidden = false,
  children,
}: GoldenRabbitDetailsWithChildrenProps) {
  return (
    <div>
      <h1>{name} (with children)</h1>
      <p>Age: {age}</p>
      <p>Status: {isHidden ? "Hidden" : "Visible"}</p>
      <div>{children}</div>
    </div>
  );
}

function GoldenRabbitApp() {
  return (
    <div>
      <GoldenRabbitDetails name="Goldie" age={3} />
      <GoldenRabbitDetails
        name="Silvie"
        age={parseInt("four")}
        isHidden={true}
      />
      <GoldenRabbitDetailsWithChildren name="Fluffy" age={1}>
        <span>This is a child element</span>
      </GoldenRabbitDetailsWithChildren>
    </div>
  );
}
