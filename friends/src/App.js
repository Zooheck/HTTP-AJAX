import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import axios from 'axios'
import FriendList from './components/FriendList'
import Friend from './components/Friend';
import FriendForm from './components/FriendForm'
import Navbar from './components/Navbar'
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
    const { newFriendName, newFriendAge, newFriendEmail } = this.state
    return (
      <div className="App">
        <Navbar />
        <h1>Friend list:</h1>
        <Route exact path="/" render={props => <FriendList {...props} friends={this.state.friends} />} />
        <Route path="/add-friend" render={props => <FriendForm {...props} newFriendName={newFriendName} newFriendAge={newFriendAge} newFriendEmail={newFriendEmail} handleInputChange={this.handleInputChange} submitFriend={this.submitFriend}/>} />

      </div>
    );
  }
}

export default App;
