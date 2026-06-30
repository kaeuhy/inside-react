// export default function BubbleGenerator() {
//   const [isPending, startTransition] = useTransition();
//
//   // 슬라이더 위치(즉시 반영)
//   const [currentSliderValue, setCurrentSliderValue] = useState(1);
//
//   // 실제 BubbleList에 전달될 값(무거운 렌더링)
//   const [listSize, setListSize] = useState(1);
//
//   const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const value = Number(e.target.value);
//
//     // 긴급 업데이트
//     setCurrentSliderValue(value);
//
//     // 낮은 우선순위 업데이트
//     startTransition(() => {
//       setListSize(value);
//     });
//   };
//
//   return (
//     <>
//       <input
//         type="range"
//         min="1"
//         max="30000"
//         value={currentSliderValue}
//         onChange={handleSliderChange}
//       />
//
//       <p>슬라이더: {currentSliderValue}</p>
//       <p>버블 개수: {listSize}</p>
//
//       {isPending && <p>버블 생성 중...</p>}
//
//       <BubbleList size={listSize} />
//     </>
//   );
// }

import { type ChangeEvent, useDeferredValue, useState } from "react";

export default function BubbleGenerator() {
  const [inputValue, setInputValue] = useState("");
  const deferredInputValue = useDeferredValue(inputValue);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <BubbleTextInput
      label="버블에 글자 새기기:"
      value={inputValue}
      onChange={handleInputChange}
    />
      <BubbleList size={listSize} text={deferredInputValue} />
  );
}
