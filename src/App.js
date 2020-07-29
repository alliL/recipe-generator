import React, { useState, useEffect } from "react";
import DropdownSection from "./DropdownSection";
import Results from "./Results";
import app from "./config";
import axios from "axios";
import "./App.css";

const App = (props) => {
  const [resultPage, setResultPage] = useState(false);
  const [data, setData] = useState({ hits: [] });
  const [text, setText] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.edamam.com/search?q=${query}&app_id=${app.id}&app_key=${app.key}`
      );
      setData(result.data);
    };
    fetchData();
  }, [query]);

  useEffect(() => {
    if (data.hits.length !== 0) {
      setResultPage(true);
    }
  }, [data]);

  return (
    <div>
      <header className="spacer">
        {resultPage ? (
          <div className="results-title">
            <h1>Search Results</h1>
          </div>
          
        ) : (
          <div className="title">
            <h1>Recipe Generator</h1>
          </div>
        )}
      </header>
      {resultPage ? (
        <div>
          <div className="back-button-section">
            <button
              className="back"
              onClick={(e) => {
                e.preventDefault();
                setQuery("");
                setResultPage(!resultPage);
              }}
            >
              Back
            </button>
          </div>

          <Results data={data.hits} />
        </div>
      ) : (
        <div className="home-center-box">
          <div className="dropdown">
            <section className="search-content">
              <h2 className="search-area">Search by Ingredient</h2>
              <div>
                <form className="search-wrapper">
                  <input
                    type="text"
                    className="search"
                    placeholder="eg: chicken spinach butter"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      setQuery(text);
                    }}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </section>
          </div>
          <DropdownSection text="Health Labels" />
          <DropdownSection text="Diet Labels" />
          <DropdownSection text="Macros" />
        </div>
      )}
    </div>
  );
};

export default App;
