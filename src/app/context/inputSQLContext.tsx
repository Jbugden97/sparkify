"use client";

import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

interface ContextProps {
  inputSqlCode: string;
  setInputSqlCode: Dispatch<SetStateAction<string>>;

  outputSqlCode: string;
  setOutputSqlCode: Dispatch<SetStateAction<string>>;

  languageSetting: string;
  setLanguageSetting: Dispatch<SetStateAction<string>>;
}

const GlobalContext = createContext<ContextProps>({
  inputSqlCode: "",
  setInputSqlCode: (): string => "",
  outputSqlCode: "",
  setOutputSqlCode: (): string => "",
  languageSetting: "",
  setLanguageSetting: (): string => "",
});

export const GlobalContextProvider = ({ children }) => {
  const [inputSqlCode, setInputSqlCode] = useState<string>("");
  const [outputSqlCode, setOutputSqlCode] = useState<string>("");
  const [languageSetting, setLanguageSetting] = useState<string>("Spark SQL");

  return (
    <GlobalContext.Provider
      value={{
        inputSqlCode,
        setInputSqlCode,
        outputSqlCode,
        setOutputSqlCode,
        languageSetting,
        setLanguageSetting,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const UseGlobalContext = () => useContext(GlobalContext);
