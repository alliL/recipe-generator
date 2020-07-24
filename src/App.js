import React, { Component } from 'react';
import DropdownSection from './DropdownSection'
import Search from './Search'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header className='spacer'>
          <div>
            <h1 className='title'>Recipe Generator</h1>
          </div>
        </header>
        <div className='center-box'>
          <Search/>
          <DropdownSection text='Health Labels'/>
          <DropdownSection text='Diet Labels'/>
          <DropdownSection text='Macros'/>
        </div>
      </div>
    )
  }
}

export default App;
