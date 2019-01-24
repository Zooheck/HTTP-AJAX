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
    newFriend: {
      name: '',
      age: 0,
      email: ''
    }

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
    event.persist()
    const { name, value } = event.target
    this.setState( previousState => {
      return {
        newFriend: {
          ...previousState.newFriend,
        [name]: value
      }}
    })
  }
  submitFriend = (event) => {
    event.preventDefault()
    axios.post('http://localhost:5000/friends', this.state.newFriend )
      .then(response => {
        this.setState({
          friends: response.data
        })
      })
    // const newFriendList = [...this.state.friends, {id: (this.state.friends.length + 1),name: this.state.newFriend.name, age: this.state.newFriend.age, email: this.state.newFriendEmail}]
    // this.setState({
    //   friends: newFriendList,
    //   newFriendName: '',
    //   newFriendAge: 0,
    //   newFriendEmail: ''
    // })
  }
  render() {
    const { name, age, email } = this.state.newFriend
    return (
      <div className="App">
        <Navbar />
        <Route exact path="/" render={props => <FriendList {...props} friends={this.state.friends} />} />
        <Route path="/add-friend" render={props => <FriendForm {...props} newFriendName={name} newFriendAge={age} newFriendEmail={email} handleInputChange={this.handleInputChange} submitFriend={this.submitFriend}/>} />

      </div>
    );
  }
}

export default App;
