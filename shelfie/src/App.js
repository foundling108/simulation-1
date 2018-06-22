import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import Header from './component/Header/Header';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inventory: []
    }
    this.getIventory = this.getIventory.bind(this);
  }

  componentDidMount() {
    this.getIventory();
    //mount the invoked () method.
  }

  getIventory() {
    axios.get('/api/inventory')
    .then( res => this.setState({ inventory: res.data }))
    //data is the . from the iventory. must have a didMount.
  }
  render() {
    return (
      <div className="App">
          
            <Header/>

              <Form getIventory={this.getIventory}/>
              
              <Dashboard inventory={this.state.inventory}/>
            
      </div>
    );
  }
}

export default App;
