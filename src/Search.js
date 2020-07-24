import React, { Component, useState } from 'react';
import './App.css';

const Search = (props) => {
    const [input, setInput] = useState("");

    const handleSubmit = (evt) => {
      evt.preventDefault();
      console.log(input);
  }

    return (
      <div className='dropdown'>
        <section className='search-content'>
          <h2 className='search-title'>Search by keyword</h2>
          <p className='search-subtext'>Enter ingredients that you have at home! Example: chicken spinach butter</p>
          <div>
            <form className='search-wrapper' onSubmit={handleSubmit}>
              <input type="text" className="search" placeholder="Search..." value={input} onChange={e => setInput(e.target.value)}/>
              <button type="submit" className="submit">Submit</button>
            </form>
          </div>
        </section>
      </div>
    );
}

export default Search;
