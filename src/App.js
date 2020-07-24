import React, { Component } from 'react';
import Search from './Search'
import DropdownSection from './DropdownSection'
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
        <body>
          <div className='center-box'>
            <Search/>
            <DropdownSection text='Health Labels'/>
            <DropdownSection text='Diet Labels'/>
            <DropdownSection text='Macros'/>
          </div>
        </body>
      </div>
    )
  }
}

export default App;
