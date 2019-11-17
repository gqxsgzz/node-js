import AppTab from './container/AppTab'
import './App.css';

import React, { Component } from 'react'
import Home from './container/AppTab';

export default class App extends Component {
  render() {
    return (
      <div>
        <AppTab />
      </div>
    )
  }
}

