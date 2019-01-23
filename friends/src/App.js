import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Friend from './components/Friend';
import FriendForm from './components/FriendForm'
class App extends Component {
  state = {
    friends: [],
    newFriendName: '',
    newFriendAge: 0,
    newFriendEmail: ''
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
  handleInputChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }
  submitFriend = (event) => {
    event.preventDefault()
    const newFriendList = [...this.state.friends, {id: (this.state.friends.length + 1),name: this.state.newFriendName, age: this.state.newFriendAge, email: this.state.newFriendEmail}]
    this.setState({
      friends: newFriendList,
      newFriendName: '',
      newFriendAge: 0,
      newFriendEmail: ''
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Friend list:</h1>
        <FriendForm
        newFriendName={this.state.newFriendName}
        newFriendAge={this.state.newFriendAge} 
        newFriendEmail={this.state.newFriendEmail}
        handleInputChange={this.handleInputChange}
        submitFriend={this.submitFriend}
        />
        {this.state.friends.map(friend => {
          return <Friend friend={friend}/>
        })}
      </div>
    );
  }
}

export default App;
