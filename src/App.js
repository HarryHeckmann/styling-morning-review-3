import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      showNav: false
    }
  }

  showMenu(){
    this.setState({showNav: !this.state.showNav})
  }
 
  render(){
    const {showNav} = this.state
    return (
      <div className="App">
         <nav id='full_nav'>
            <h2>Home</h2>
            <h2>History</h2>
            <h2>Explore</h2>
            <h2>Contact</h2>
         </nav>
         <button id='nav_button' onClick={() => this.showMenu()}>Menu</button>
         <nav id={showNav ? 'mobile_nav' : 'mobile_nav_hidden'}>
            <div>
              <h2>Home</h2>
              <h2>History</h2>
              <h2>Explore</h2>
              <h2>Contact</h2>
            </div>
         </nav>
         <div className='middle'>
            <h1> “All good things are wild and free.” </h1>
            <h3>-Henry David Thoreau</h3>
         </div>

      </div>
    );
  }
}

export default App;
