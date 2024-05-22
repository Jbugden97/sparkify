"use client";

import React from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

interface ChildComponentProps {
  inputSqlCode: string;
  // outputSqlCode:string;
  setOutputSqlCode: React.Dispatch<React.SetStateAction<string>>;
  genAIKey: string;
  language: string;
}

async function runGenAI(
  inputSQL: string,
  genAI: GoogleGenerativeAI,
  lang: string
) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `Check if the following text is SQL ${inputSQL}. If it is 
    can you please convert this to 
    ${lang}  Only provide me with the code and nothing else 
    and no formatting options required. if the input is NOT SQL CODE
     than respond with "invalid request"`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();

  return text;
  // console.log(text);
}

const ConvertSQLButton: React.FC<ChildComponentProps> = ({
  inputSqlCode,
  setOutputSqlCode,
  genAIKey,
  language,
}) => {
  const genAi = new GoogleGenerativeAI(genAIKey);

  const handleCLick = async () => {
    setOutputSqlCode("fetching...");

    try {
      const result = await runGenAI(inputSqlCode, genAi, language);
      setOutputSqlCode(result);
    } catch (error) {
      console.error("Error:", error);
      setOutputSqlCode("error occured");
    }
  };

  return (
    <>
      <button
        className="bg-slate-100 border-stone-600 hover:bg-slate-300 text-stone-600 text-lg px-4 rounded"
        onClick={handleCLick}
      >
        Convert!
      </button>
    </>
  );
};

export default ConvertSQLButton;
