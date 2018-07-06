import React, { Component } from 'react';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Header from './component/Header/Header';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       This is the App Component
       <Header />
       <Dashboard />
       <Form />
      </div>
    );
  }
}

export default App;
