import BuyCoffee from "./header-buttons";

export default function Header() {
  return (
    <>
      <header className="bg-white flex flex-col items-center justify-center">
        <div className="flex items-center bg-white flex-col py-12">
          <div className="min-h-full">
            <a href="#" className="">
              {/* <span className="">Sparkify</span> */}
              <img className="h-20 w-auto" src="/sparkify_logo.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-8 text-gray-900 ">
          {/* <div className="inline-block bg-slate-300 px-6 rounded-lg">
            <span>How it Works</span>
          </div>

          <div className="inline-block bg-slate-300 px-6 rounded-lg">
            <span>Convert My SQL</span>
          </div>

          <div className="inline-block bg-slate-300 px-6 rounded-lg">
            <BuyCoffee />
          </div> */}

          <p>Convert your SQL to PySpark or SparkSQL</p>
        </div>
      </header>
    </>
  );
}
