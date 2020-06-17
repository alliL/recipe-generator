import React, { Component } from 'react';
import './App.css';

class Search extends Component {
  render() {
    return (
      <div className='dropdown'>
        <section className='search-content'>
          <h2 className='search-title'>Search by keyword</h2>
          <h4 className='search-subtext'>Enter ingredients that you have at home! Example: chicken spinach butter</h4>
          <div>
            <form className='search-wrapper'>
              <input type="text" placeholder="Search..." className="search"/>
              <button type="submit" className="submit">Submit</button>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default Search;
