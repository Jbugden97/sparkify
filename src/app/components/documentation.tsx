import Accordion from "./accordion";

export default function Documentation() {
  return (
    <>
      <div className="p-4 mx-24 mt-10 text-amber-500 font-extrabold text-4xl">
        <h1>Documentation</h1>
      </div>

      <div className="p-4 bg-gray-200 rounded-lg mx-28 mt-10">
        <Accordion
          title="What is Sparkify"
          answer="Sparkify is a web application to deigned to help you transform existing SQL code into PySpark or Spark SQL Code"
        ></Accordion>
      </div>
      <div className="p-4 bg-gray-200 rounded-lg mx-28 mt-10">
        <Accordion
          title="How Does Sparkify Work?"
          answer="Sparkify is currently using Google's Gemini to make the transformations"
        ></Accordion>
      </div>
      <div className="p-4 bg-gray-200 rounded-lg mx-28 mt-10">
        <Accordion
          title="Feature Roadmap"
          answer="The planned features are, support for various SQL Languages, fine tuning of the model to handle more complex queries"
        ></Accordion>
      </div>
      {/* <div className="p-4 bg-gray-200 rounded-lg mx-28 mt-10">
        <Accordion
          title="Show your support"
          answer="If this service has helped you please donate so i can keep improving this site!"
        ></Accordion>
      </div> */}
    </>
  );
}
