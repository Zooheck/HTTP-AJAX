import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Friend from './components/Friend';
class App extends Component {
  state = {
    friends: []
  }
  componentDidMount = () => {
    axios
      .get('http://localhost:5000/friends')
      .then(response => {
        console.log(response.data)
        this.setState({
          friends: response.data
        })
      })

  }
  render() {
    return (
      <div className="App">
        <h1>Friend list:</h1>
        {this.state.friends.map(friend => {
          return <Friend />
        })}
      </div>
    );
  }
}

export default App;
