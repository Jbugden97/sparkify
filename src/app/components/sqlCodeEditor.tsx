"use client";

import Editor, { OnChange } from "@monaco-editor/react";
import React from "react";
import { UseGlobalContext } from "../context/inputSQLContext";

const SqlCodeEditor: React.FC = () => {
  //   const [sqlScript, setSqlScript] = useState<string>("");

  const { inputSqlCode, setInputSqlCode } = UseGlobalContext();

  const handleEditorChange: OnChange = (value, event) => {
    setInputSqlCode(value || "");
  };

  return (
    <Editor
      height="30vh"
      defaultLanguage="sql"
      theme="vs-dark"
      onChange={handleEditorChange} // Attach the onChange event handler
    />
  );
};

export default SqlCodeEditor;
