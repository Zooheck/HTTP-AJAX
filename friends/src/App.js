import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import axios from 'axios'
import FriendList from './components/FriendList'
import Friend from './components/Friend';
import FriendForm from './components/FriendForm'
import Navbar from './components/Navbar'

const blankFriend = {
  name: '',
  age: 0,
  email: ''
}
class App extends Component {
  state = {
    friends: [],
    newFriend: {
      name: '',
      age: 0,
      email: ''
    },
    isUpdatingFriend: false
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
    axios.post('http://localhost:5000/friends', this.state.newFriend )
      .then(response => {
        this.setState({
          friends: response.data,
          newFriend: blankFriend
        })
      })
    this.props.history.push('/')
  }
  updateFriend = () => {
    const id = this.state.newFriend.id
    axios
      .put(`http://localhost:5000/friends/${id}`, this.state.newFriend)
      .then(response => {
        this.setState({
          friends: response.data,
          newFriend: blankFriend,
          isUpdatingFriend: false
        })
        
      })
      .catch(error => {
        console.log(error)
      })
      this.props.history.push('/')
  }
  populateForm = (id) => {
    this.setState({
      newFriend: this.state.friends.find(friend => friend.id === id),
      isUpdatingFriend: true
    })
    this.props.history.push('/add-friend');
  }
  deleteFriend = (id) => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({friends: response.data})
      })
      .catch(error => {
        console.log(error)
      })
  }
  render() {
    const { name, age, email } = this.state.newFriend
    return (
      <div className="App">
        <Navbar />
        <Route exact path="/" render={props => 
        <FriendList {...props}
          friends={this.state.friends}
          populateForm={this.populateForm}
          deleteFriend={this.deleteFriend}
          isUpdatingFriend={this.state.isUpdatingFriend}/>} />
        <Route path="/add-friend" render={props =>
        <FriendForm
          {...props}
          newFriendName={name}
          newFriendAge={age}
          newFriendEmail={email}
          friends={this.state.friends}
          handleInputChange={this.handleInputChange}
          submitFriend={this.submitFriend}
          updateFriend={this.updateFriend}
          isUpdatingFriend={this.state.isUpdatingFriend}
          />}
      />
      </div>
    );
  }
}

export default App;
