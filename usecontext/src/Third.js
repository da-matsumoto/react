import React, { useContext } from "react";
import { TextContext } from "./TextProvider";

export const Third = () => {
  const textData = useContext(TextContext);
  console.log(textData);
  return (
    <>
      <p>
        Thirdコンポーネント: <b>{textData}</b>
      </p>
    </>
  );
}