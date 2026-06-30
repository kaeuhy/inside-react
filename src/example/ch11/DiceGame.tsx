// 무작위 색상 코드를 생성하는 헬퍼 함수
import { useState } from "react";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

interface DiceGameProps {
  maxTries?: number;
}

export default function DiceGame({ maxTries = 5 }: DiceGameProps) {
  const [diceNumber, setDiceNumber] = useState(1);
  const [remainingTries, setRemainingTries] = useState(maxTries);
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [theme, setTheme] = useState("Default");

  const rollDiceAsync = () => {
    setTimeout(() => {
      const newDiceNumber = Math.floor(Math.random() * 6) + 1;
      const newRemainingTries = remainingTries - 1;
      const newBackgroundColor = getRandomColor();
      const newTheme =
        newDiceNumber === 6
          ? "GoldenRabbit"
          : `random ${maxTries - newRemainingTries}`;

      setDiceNumber(newDiceNumber);
      setRemainingTries(newRemainingTries);
      setBackgroundColor(newBackgroundColor);
      setTheme(newTheme);

      console.log(
        "During event handler - Dice:",
        newDiceNumber,
        "Tries:",
        newRemainingTries,
        "Background:",
        newBackgroundColor,
        "Theme:",
        newTheme,
      );
    }, 1000);
  };

  console.log(
    "Render - Dice:",
    diceNumber,
    "Tries:",
    remainingTries,
    "Background:",
    backgroundColor,
    "Theme:",
    theme,
  );

  return (
    <div>
      <p>{diceNumber}</p>
      <p>{remainingTries}</p>
      <p>{theme}</p>
      <button
        type="button"
        onClick={rollDiceAsync}
        disabled={remainingTries === 0}
      >
        주사위 던지기 게임
      </button>
    </div>
  );
}
