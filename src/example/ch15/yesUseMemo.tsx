// import { useMemo, useState } from "react";
//
// function CalculateFibonacci(n: number): number {
//   if (n <= 1) return 1;
//   return CalculateFibonacci(n - 1) + CalculateFibonacci(n - 2);
// }
//
// function generateComplexPattern(seed: number, size: number): string[] {
//   let pattern: string[] = [];
//   for (let i = 0; i < size; i++) {
//     let value = CalculateFibonacci(seed + (i % 10));
//     pattern.push(`hsl(${value % 360}, 70%, 50%`);
//   }
//   return pattern;
// }
//
// export default function OptimizedRabbitPattern() {
//   const [seed, setSeed] = useState(0);
//   const [count, setCount] = useState(0);
//
//   const colors = useMemo(() => {
//     return generateComplexPattern(seed, 20);
//   }, [seed]);
//
//   return (
//     <div className="p-4 border rounded-lg">
//       <h2 className="text-xl font-bold mb-4">최적화 된 (seed: {seed}</h2>
//       <div className="flex gap-2 mb-4">
//         {colors.map((color, i) => (
//           <div
//             key={i} // 리액트 리스트 렌더링 시 필요한 key 속성
//             className="w-8 h-8 rounded"
//             style={{ backgroundColor: color }} // 각 div의 배경색을 설정함
//           />
//         ))}
//       </div>
//
//       <button type="button" onClick={() => setSeed((s) => s + 1)}>
//         패턴 변경하기
//       </button>
//
//       <button type="button" onClick={() => setCount((c) => c + 1)}>
//         클릭 횟수: {count}
//       </button>
//     </div>
//   );
// }

import { memo, useCallback } from "react";

const MemoizedChild = memo(({ onClick }: { onClick: () => void }) => {
  return (
    <button type="button" onClick={onClick}>
      name
    </button>
  );
});

export default function ParentComponentForMemo() {
  const memoizedHandleClick = useCallback(() => {
    console.log("Memoized");
  }, []);

  const unmemoizedHandleClick = () => {
    console.log("UnMemoized");
  };

  return (
    <div>
      <MemoizedChild onClick={memoizedHandleClick} />
      <MemoizedChild onClick={unmemoizedHandleClick} />
    </div>
  );
}
