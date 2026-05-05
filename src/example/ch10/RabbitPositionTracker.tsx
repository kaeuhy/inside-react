import { type ReactNode, useState } from "react";

type RenderProp = (position: { x: number; y: number }) => ReactNode;

interface RabbitPositionTrackerProps {
  children: RenderProp;
}

export default function RabbitPositionTracker({
  children,
}: RabbitPositionTrackerProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    // 마우스 움직임을 감지할 영역
    <div
      style={{
        border: "1px dashed #ccc",
        minHeight: "300px",
        position: "relative",
      }}
      onMouseMove={handleMouseMove}
    >
      {/* ❷ children으로 받은 함수를 호출하여 현재 위치(position)를 전달함 */}
      {children(position)}
    </div>
  );
}
