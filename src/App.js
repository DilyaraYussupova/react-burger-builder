import React, { Component } from 'react';
import './App.css';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
      
    return (    
        <div className="container-fluid">
       
          <div className='App'> 
              <BurgerBuilder/>
          </div>
    
        </div>
    );
  }
}

export default App;
