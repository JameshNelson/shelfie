import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'; 
import Form from './Components/Form/Form'; 
import Header from './Components/Header/Header'; 
import axios from 'axios'; 

class App extends Component {
  constructor(){
    super()

    this.state = {
      inventory: []
    }
  }

  componentDidMount(){
    axios.get('/api/inventory').then(res =>{

      const invArr = res.data;
      this.setState({invArr});
    }).catch(err => console.log(err))
  }

  render(){

    return (
      <div className="App">
        <Header />
        <Form/>
        <Dashboard />
       
      </div>
    );
  }
 
}

export default App;
