import React, { useState } from "react";
import { Counter } from "./Counter";
import { Hello } from "./Hello";

const INITIAL_COUNT = 0;
const INITIAL_NAME = "JavaScript";

const SampleComponent = () => {
  const [count, setCount] = useState(INITIAL_COUNT);
  const [name, setName] = useState(INITIAL_NAME);

  const countIncrement = () => setCount((prevCount) => prevCount + 1);
  const countDecrement = () => setCount((prevCount) => prevCount - 1);
  const countReset = () => setCount(INITIAL_COUNT);
  const handleChangeName = (e) => {
    setName(e.target.value);
  }

  return (
    <div className="App">
      <Counter
        count={count}
        initialCount={INITIAL_COUNT}
        countIncrement={countIncrement}
        countDecrement={countDecrement}
        countReset={countReset}
      />
      <Hello
        name={name}
        initialName={INITIAL_NAME}
        handleChangeName={handleChangeName}
      />
    </div>
  );
}

export default function App() {
  return (
    <>
      <SampleComponent />
      <SampleComponent />
    </>
  );
}

