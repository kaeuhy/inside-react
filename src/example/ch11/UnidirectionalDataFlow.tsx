import { useState } from "react";

export default function ParentComponent() {
  const [currnetMessage, setCurrentMessage] = useState("초기 메시지입니다.");

  const handleMessageUpdate = (newMessage: string) => {
    if (newMessage.trim() === "") {
      alert("메시지를 입력해주세요.");
      return;
    }
    setCurrentMessage(newMessage);
  };
}
