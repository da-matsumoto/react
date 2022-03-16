import React, { useContext } from "react";
import { CountContext } from "./CountProvider";

export const Third = () => {
  const [count, setCount] = useContext(CountContext);

  console.log(`現在のカウント：${count}`);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <p>
        Thirdコンポーネント：<b>現在のカウント：{count}</b>
      </p>
      <button onClick={handleClick}>+1ボタン</button>
    </>
  );
}