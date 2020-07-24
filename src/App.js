import React, { useState } from "react";
import DropdownSection from "./DropdownSection";
import Results from "./Results";
import Search from "./Search";
import "./App.css";

const App = (props) => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <header className="spacer">
        <div>
          <h1 className="title">Recipe Generator</h1>
        </div>
      </header>
      {submitted ? (
        <Results />
      ) : (
        <div className="center-box">
          <Search submitted={setSubmitted} />
          <DropdownSection text="Health Labels" />
          <DropdownSection text="Diet Labels" />
          <DropdownSection text="Macros" />
        </div>
      )}
    </div>
  );
};

export default App;
