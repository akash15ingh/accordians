import React from "react";
import { accordionData } from "./Components/Content";
import Accordians from "./Components/Accordians";

const App = () => {
  return (
    <div>
      <div className="accordian">
        {accordionData.map(({ title, content }) => {
          return <Accordians title={title} content={content} />;
        })}
      </div>
    </div>
  );
};

export default App;
