import { useState } from "react";

function calculateFibonacci(n: number): number {
  if (n <= 1) return 1;
  return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
}

function generateComplexPattern(seed: number, size: number): string[] {
  let pattern: string[] = [];
  for (let i = 0; i < size; i++) {
    let value = calculateFibonacci(seed + (i % 10));
    pattern.push(`hsl(${value % 360}, 70%, 50%`);
  }
  return pattern;
}

export default function UnoptimizedRabbitPatter() {
  const [seed, setSeed] = useState(0);
  const [count, setCount] = useState(0);

  const colors = generateComplexPattern(seed, 20);

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-4">최적화 전 (seed: {seed}</h2>
      <div className="flex gap-2 mb-4">
        {colors.map((color, i) => (
          <div
            key={i} // 리액트 리스트 렌더링 시 필요한 key 속성
            className="w-8 h-8 rounded"
            style={{ backgroundColor: color }} // 각 div의 배경색을 설정함
          />
        ))}
      </div>

      <button type="button" onClick={() => setSeed((s) => s + 1)}>
        패턴 변경하기
      </button>

      <button type="button" onClick={() => setCount((c) => c + 1)}>
        클릭 횟수: {count}
      </button>
    </div>
  );
}
