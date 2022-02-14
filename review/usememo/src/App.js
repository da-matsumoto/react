import React, { useState, useMemo } from "react";

const square = (params) => {
  const testData = [...Array(1000).keys()];

  testData.forEach(() => {
    console.log(
      `「計算：B+1」がボタンクリックされsquare関数実行、
      ループ処理を${testData.length}回実行中。。。`
    );
  });

  return params * params;
}

const Counter = () => {
  const [countStateA, setCountStateA] = useState(0);
  const [countStateB, setCountStateB] = useState(0);

  const countResultA = () => {
    setCountStateA((prevCount) => prevCount + 1);
    console.log("計算：A+1ボタンがクリックされました");
  }

  const countResultB = () => {
    setCountStateB((prevCount) => prevCount + 1);
    console.log("計算：B+1ボタンがクリックされました");
  }

  const squareArea = useMemo(() => square(countStateB), [countStateB]);

  return (
    <>
      <p>
        <button onClick={countResultA}>計算:A+1</button>
      </p>

      <p>
        <button onClick={countResultB}>計算:B+1</button>
      </p>

      <p>[正方形の面積]</p>
      <p>計算結果B * 計算結果B = {squareArea}</p>
    </>
  );
}

export default function App() {
  return <Counter />
}