import React, { useState, useCallback } from "react";

const Button = React.memo(({ counterState, buttonValue }) => {
  console.log(`${buttonValue}がクリックされました`);
  return <button onClick={counterState}>{buttonValue}</button>;
});

const Counter = () => {
  const [countStateA, setCountStateA] = useState(0);
  const [countStateB, setCountStateB] = useState(0);

  const countIncrementA = useCallback(() => 
    setCountStateA(countStateA + 1), [countStateA]
  );

  const countIncrementB = useCallback(() => 
    setCountStateB(countStateB + 1), [countStateB]
  );

  return (
    <>
      <p>Aボタン{countStateA}</p>
      <p>Bボタン{countStateB}</p>

      <Button counterState={countIncrementA} buttonValue="Aボタン" />
      <Button counterState={countIncrementB} buttonValue="Bボタン" />
    </>
  );
};

export default function App() {
  return <Counter />;
}