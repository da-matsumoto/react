import React, { createContext } from "react";

export const TextContext = createContext();

const text = "これはProviderから渡されたテキストです";

export const TextProvider = ({ children }) => {
  return <TextContext.Provider value={text}>{children}</TextContext.Provider>
}