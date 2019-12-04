import React, {Component} from 'react';
import './App.css';
import {HashRouter} from 'react-router-dom'; 
import Dashboard from './Components/Dashboard/Dashboard'; 
import Form from './Components/Form/Form'; 
import Header from './Components/Header/Header'; 
import routes from './routes'; 
import {Link} from 'react-router-dom'; 
import axios from 'axios'; 

class App extends Component {
  constructor(){
    super()

    this.state = {
      inventory: []
    }
  }

  componentDidMount(){
    const url ='http://localhost:4000/api/inventory'
    axios.get(url).then(res =>{
      console.log(res.data); 
      const inventory = res.data;
      this.setState({inventory});
    }).catch(err => console.log(err))
  }

  render(){

    return (
      <HashRouter>
        <div className="App">
          <Header />
          <Form/>
          <Dashboard inventory = {this.state.inventory}/>
        
        </div>
      </HashRouter>
    );
  }
 
}

export default App;
