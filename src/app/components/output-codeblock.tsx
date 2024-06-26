"use-client";

import { useState } from "react";

interface OutputCodeBlockProps {
  sqlOutput: string;
}

const OutputCodeBlock: React.FC<OutputCodeBlockProps> = ({ sqlOutput }) => {
  const [copy, setCopy] = useState<boolean>(false);
  return (
    <div className="relative mx-auto mb-64">
      <div className="bg-gray-900 text-white p-4 rounded-md">
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-400 text-lg">Code:</span>
          <button
            className="code bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-1 rounded-md text-lg"
            data-clipboard-target="#code"
            onClick={async () => {
              await navigator.clipboard.writeText(sqlOutput);
              setCopy(true);
              setTimeout(() => {
                setCopy(false);
              }, 1000);
            }}
          >
            {copy ? "Copied!" : "Copy"}
          </button>
        </div>
        <div className="overflow-x-auto text-sm">
          <pre id="code" className="text-gray-300 text-pretty">
            <code>{sqlOutput}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default OutputCodeBlock;
