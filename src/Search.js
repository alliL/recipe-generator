import React, { useState, useEffect } from "react";
import app from './config'
import axios from "axios";
import "./App.css";

const Search = (props) => {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://api.edamam.com/search?q=${search}&app_id=${app.id}&app_key=${app.key}`
      );
      setData(result.data);
    };
    fetchData();
  }, [search]);

  return (
    <div className="dropdown">
      <section className="search-content">
        <h2 className="search-title">Search by Ingredient</h2>
        <div>
          <form className="search-wrapper">
            <input
              type="text"
              className="search"
              placeholder="eg: chicken spinach butter"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              type="submit"
              className="submit"
              onClick={(e) => {
                e.preventDefault();
                setSearch(query);
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Search;
