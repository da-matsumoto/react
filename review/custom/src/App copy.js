import React, { useState } from "react";

 const CounterText = (props) => <p>現在のカウント数：{props.count}</p>

 const INITIAL_COUNT = 0;

 const Counter = () => {
   const [count, setCount] = useState(INITIAL_COUNT);
   const countAdd = () => setCount((prevCount) => prevCount + 1);
   const countSub = () => setCount((prevCount) => prevCount - 1);
   const countReset = () => setCount(INITIAL_COUNT);

   return (
     <div className="counterContainer">
       <CounterText count={count} />
       <button onClick={countAdd}>ボタン +1</button>
       <button onClick={countSub}>ボタン -1</button>
       <button onClick={countReset}>リセット</button>
     </div>
   );
 }

 export default function App() {
   return <Counter />;
 }