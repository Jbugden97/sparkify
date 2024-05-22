"use client";

import SqlCodeEditor from "./sqlCodeEditor";
import DropDown from "./language-dropdown";
import ConvertSQLButton from "./convertButton";
import OutputCodeBlock from "./output-codeblock";
import { UseGlobalContext } from "../context/inputSQLContext";

interface ChildComponentProps {
  genAIKey: string;
}

const CodeConverter: React.FC<ChildComponentProps> = ({ genAIKey }) => {
  const {
    inputSqlCode,
    setInputSqlCode,
    outputSqlCode,
    setOutputSqlCode,
    languageSetting,
  } = UseGlobalContext();

  return (
    <>
      <div className="p-4 mx-24 mt-10 text-amber-500 font-extrabold text-4xl">
        <h1 className="pb-12">Enter your SQL Query</h1>
        <SqlCodeEditor />
        <div className="flex flex-row justify-around pb-12 pt-12">
          {/* <h1 className="justify-self-start bg-orange-900">Converted Code</h1> */}

          <DropDown />
          <ConvertSQLButton
            inputSqlCode={inputSqlCode}
            setOutputSqlCode={setOutputSqlCode}
            genAIKey={genAIKey}
            language={languageSetting}
          />
        </div>
        <OutputCodeBlock sqlOutput={outputSqlCode} />
      </div>
    </>
  );
};

export default CodeConverter;
