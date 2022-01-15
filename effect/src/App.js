import React, { useState, useEffect } from "react";

const INITIAL_COUNT = 0;

const Timer = () => {
  const [count, setCount] = useState(INITIAL_COUNT);

  const countReset = () => {
    setCount(INITIAL_COUNT);
  };

  const countIncrement = () => {
    setCount((prevCount) => prevCount + 1);
    console.log("カウントアップ +1");
  };

  const callbackFunction = () => {
    alert("副作用関数が実行されました。");
    const timer = setInterval(countIncrement, 1000);
    return () => {
      console.log("timerが削除されました。");
      clearInterval(timer);
    }
  }

  useEffect(callbackFunction, []);

  return (
    <div className="App">
      <p>現在のカウント数：{count}</p>
      <button onClick={countReset}>RESET</button>
    </div>
  );
}



// const SampleComponent = () => {
//   const [count, setCount] = useState(INITIAL_COUNT);

//   const callbackFunction = () => {
//     document.title = `${count} 回クリックされました`;
//   };

//   useEffect(callbackFunction, [count]);

//   const countIncrement = () => {
//     setCount((prevCount) => prevCount + 1);
//   };

//   const countReset = () => {
//     setCount(INITIAL_COUNT);
//   };

//   return (
//     <div className="App">
//       <p>現在のカウント数: {count}</p>
//       <button onClick={countIncrement}>+ 1 ボタン</button>
//       <button onClick={countReset}>リセット</button>
//     </div>
//   );
// };

export default function App() {
  const [display, toggleDisplay] = useState(false);

  const handleToggleDisplay = () => {
    toggleDisplay(!display);
  };
  return (
    <>
      <button onClick={handleToggleDisplay}>
        {display ? "タイマーを非表示" : "タイマーを表示"}
      </button>
      {display && <Timer />}
    </>
  );
}