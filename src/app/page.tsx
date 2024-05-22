import Header from "@/app/components/header";
import Documentation from "./components/documentation";
import CodeConverter from "./components/code-converter";

function getGoogleAPI(): string {
  const apiKey = process.env.GEMINI_API;
  if (!apiKey) {
    throw new Error("Missing GEMINI_API environment variable");
  }
  return apiKey;
}

export default function Home() {
  return (
    <>
      <Header></Header>
      <Documentation />
      <CodeConverter genAIKey={getGoogleAPI()} />
    </>
  );
}
