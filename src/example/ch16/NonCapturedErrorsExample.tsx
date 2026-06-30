import { useEffect } from "react";

const handleErrorInEventHanlder = () => {
  try {
    throw new Error("이벤트 핸들러에서 발생한 에러");
  } catch (e) {
    if (e instanceof Error) {
      alert(`ErrorBoundary에 감지 안 됨`);
    }
  }
};

const handleErrorInFetch = () => {
  fetch("/invalid-endpoint")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP 에러! status: ${response.status}`);
      }
      return response.json();
    })
    .catch((e) => {
      if (e instanceof Error) {
        alert(`fetch 비동기 에러`);
      }
    });
};

const handleErrorInSetTimeout = () => {
  setTimeout(() => {
    try {
      throw new Error("setTimeout 콜백에서 발생한 에러");
    } catch (e) {
      if (e instanceof Error) {
        alert(`setTimeout 에러`);
      }
    }
  }, 1000);
};

const ChildWithErrorOnMount = () => {
  useEffect(() => {
    throw new Error("useEffect에서 즉시 발생한 동기적 에러");
  }, []);
  return <p>이 컴포넌트는 마운트 시 즉시 에러를 발생시킴</p>;
};
