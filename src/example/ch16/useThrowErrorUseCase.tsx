import { useState } from "react";

export const useThrowError = () => {
  const [_errorState, setErrorState] = useState<Error | null>(null);

  return (error: Error) => {
    setErrorState(() => {
      throw error;
    });
  };
};

const CarrotPriceUpdater = () => {
  const throwErrorHook = useThrowError();

  const handleUpdatePrice = () => {
    try {
      console.log("당근 가격 업데이트 시도...");
      throw new Error("당근 가격 서버 통신 실패!");
    } catch (error) {
      if (error instanceof Error) {
        throwErrorHook(error);
      } else {
        throwErrorHook(new Error("알 수 없는 에러 발생"));
      }
    }
  };

  return (
    <div>
      <h3>당근 가격 정보</h3>
      <button type="button" onClick={handleUpdatePrice}>
        가격 업데이트
      </button>
    </div>
  );
};
