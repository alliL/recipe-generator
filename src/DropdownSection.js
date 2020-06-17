import React, { Component } from 'react';
import './App.css';

class DropdownSection extends Component {
  render() {
    return (
      <div className='dropdown'>
        <h2 className='dropdown-title'>{this.props.text}</h2>
      </div>
    );
  }
}

export default DropdownSection;
