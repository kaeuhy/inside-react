import { produce } from "immer";
import { useState } from "react";

export default function Immutability() {
  const [user, setUser] = useState({
    name: "진수",
    profile: {
      age: 25,
      social: {
        twitter: "@jinsu",
      },
    },
    items: ["옷", "신발"],
  });

  const updateUser = () => {
    setUser(
      produce((draft) => {
        draft.profile.age += 1;
        draft.items.push("가방");
      }),
    );
  };
}
