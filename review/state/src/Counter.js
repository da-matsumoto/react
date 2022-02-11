export const Counter = ({
  count,
  initialCount,
  countIncrement,
  countDecrement,
  countReset
}) => {
  return (
    <>
      <p>
        現在のカウント数：<b>{count}</b>
        <br />
        countの初期値：<b>{initialCount}</b>
      </p>
      <button onClick={countIncrement}>increment</button>
      <button onClick={countDecrement}>decrement</button>
      <button onClick={countReset}>reset</button>
    </>
  );
}