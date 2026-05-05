import RabbitPositionTracker from "@/example/ch10/RabbitPositionTracker.tsx";

export default function GoldenFarmApp() {
  return (
    <div>
      <h1>토끼를 따라가 보세요!</h1>
      <p>아래 회색 점선 상자 안에서 마우스를 움직여보세요.</p>
      <RabbitPositionTracker>
        {(position) => (
          <div
            style={{
              position: "absolute",
              left: position.x,
              top: position.y,
              transform: "translate(-50%, -50%)",
              fontSize: "2em",
            }}
          >
            🐇
          </div>
        )}
      </RabbitPositionTracker>
    </div>
  );
}
