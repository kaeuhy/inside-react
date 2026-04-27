import { useEffect, useState } from "react";

// 토끼 이름 카드 컴포넌트 (실험용)
export const RabbitNameCard = ({ name }) => {
  useEffect(() => {
    // ➊ 이 컴포넌트 인스턴스가 생성(마운트)될 때 한 번만 실행됨
    console.log(`Card "${name}" mounted`);
    return () => console.log(`Card "${name}" unmounted`);
  }, []);

  // ➋ 이 컴포넌트가 리렌더링 될 때마다 실행됨
  useEffect(() => {
    console.log(`Card "${name}" rerendered with new props`);
  });

  // ➌ defaultValue는 오직 마운트 시점에만 input의 초기값을 설정함
  return (
    <input
      defaultValue={name}
      className="border border-gray-300 p-2 rounded text-center shadow-sm"
    />
  );
};

// 토끼 이름 배열을 섞는 Fisher-Yates 알고리즘 구현 함수
const shuffle = (rabbits = []) => {
  const deck = rabbits.slice(); // 원본 배열 복사
  // 배열의 마지막 요소부터 시작하여 각 요소를 무작위 위치의 요소와 교환함
  for (let i = deck.length - 1; i >= 0; --i) {
    const randomIndex = Math.floor(Math.random() * i); // 0과 i 사이의 무작위 인덱스 생성

    // 요소 교환 (swap)
    const temp = deck[i];
    deck[i] = deck[randomIndex];
    deck[randomIndex] = temp;
  }
  return deck; // 섞인 배열 반환
};

const RabbitShuffleDeck = () => {
  const initialRabbits = [
    "Golden",
    "Silver",
    "Dante",
    "Frank",
    "Kate",
    "Bread",
  ];
  const [rabbitDeck, setRabbitDeck] = useState(initialRabbits);

  const handleClick = () => {
    setRabbitDeck(shuffle(initialRabbits));
  };

  return (
    <div className="p-4 flex flex-col items-center gap-y-4">
      <button type="button" onClick={handleClick} className="...">
        shuffle rabbit
      </button>
      <div className="grid grid-cols-3 gap-2 w-full max-w-md">
        {/* key 프롭 없이 리스트를 렌더링 */}
        {rabbitDeck.map((rabbit) => (
          <RabbitNameCard key={rabbit} name={rabbit} />
        ))}
      </div>
    </div>
  );
};

export default RabbitShuffleDeck;
//
// // React.memo로 컴포넌트를 감싸서 메모이제이션
// const MemoizedNameCard = React.memo(RabbitNameCard);
//
// const MemoizedCardDisplay = React.memo(RabbitNameDisplay);
//
// // React.memo로 컴포넌트를 감싸서 메모이제이션
// const MemoizedCardDisplay = React.memo(RabbitNameDisplay);
//
// // // ... 컴포넌트 내부 ...
// // // 인덱스를 key로 사용
// // rabbitDeck.map((rabbit, index) => (
// //   <MemoizedCardDisplay name={rabbit} key={index} />
// // ));
//
// const MemoizedCardDisplay = React.memo(RabbitNameDisplay);
// // ... 컴포넌트 내부 ...
// rabbitDeck.map((rabbit) => <MemoizedCardDisplay name={rabbit} key={rabbit} />);
