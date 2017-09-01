import React, { Component } from 'react';
import logo from './logo.svg';
import Image from './Image';
import Profile from './Profile';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      person: {
        name: 'Srivatsa Shankaran',
        biography: '24 year old fullstack developer living in Bremen, Germany. Originally from Bangalore, India. Love to learn and build stuff'
      },
      image: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAP8AAAAJDhmN2EzN2MwLTYzMGItNDIxOS05YjJlLWVjZDdhNDRhZTQ5ZQ.jpg',
      quote: {
        content: 'Never Ever Give Up',
        source: 'Nature'
      }
    };
  }


  render() {
    return (
      <div className="App">
        <Image src={this.state.image} />
        <Profile person={this.state.person} quote={this.state.quotes} />
      </div>
    );
  }
}

export default App;
