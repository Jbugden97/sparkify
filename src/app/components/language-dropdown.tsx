"use client";

import { UseGlobalContext } from "../context/inputSQLContext";

export default function Example() {
  const { languageSetting, setLanguageSetting } = UseGlobalContext();

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguageSetting(event.target.value);
  };

  return (
    <form className="">
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Select an output option
      </label>
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        // defaultValue=""
        value={languageSetting}
        onChange={handleOptionChange}
      >
        <option value="Spark SQL">Spark SQL</option>
        <option value="PySpark">PySpark</option>
      </select>
    </form>
  );
}
