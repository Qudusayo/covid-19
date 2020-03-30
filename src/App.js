import React, { Component } from 'react';

import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css'
import  './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      cases: undefined,
      deaths: undefined,
      recovered: undefined,
    }
  }

  componentDidMount(){
    const getCount = async()  => {
      const value = await fetch('https://coronavirus-19-api.herokuapp.com/all');
      const response = await value.json();
      this.setState({cases: response.cases,
      deaths: response.deaths,
      recovered: response.recovered})
      console.log(response)
    }
    getCount()
  }

  render() {
    return (
      <div>
        <Header 
          cases={this.state.cases} 
          deaths={this.state.deaths} 
          recovered={this.state.recovered} 
        />
      </div>
    )
  }
}

export default App
