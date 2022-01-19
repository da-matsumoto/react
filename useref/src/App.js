import React, {useRef} from "react";

const SampleComponent = () => {
  const inputRefObject = useRef(null);

  const handleClick = () => {
    inputRefObject.current.focus();
  };

  return (
    <div className="App">
      <input type="text" ref={inputRefObject} />

      <button onClick={handleClick}>入力エリアをフォーカス</button>
    </div>
  );
}

export default function App() {
  return <SampleComponent />
}