interface RabbitNameTagProps {
  rabbit: {
    age: number;
  };
}

export const RabbitNameTag = () => {
  const rabbit: RabbitNameTagProps = { age: 1 };
  return (
    <div>
      {/* rabbit이 0살이라면 조건식이 거짓으로 평가가 되어 렌더링되지 않음 */}
      {rabbit.age && <p>Age: {rabbit.age}</p>}
      {NaN}
      {false}
      {undefined}
      {null}
    </div>
  );
};
