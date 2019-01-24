import React from 'react'
import '../App.css'
import './friend-form.css'
const FriendForm = (props) => {
  return (
    <div className="form-container">
      <form>
          <input
          required
          type="text"
          name="name"
          value={props.newFriendName}
          onChange={props.handleInputChange}
          placeholder="Name"/>
          <input
          required
          type="number"
          name="age"
          value={props.newFriendAge}
          onChange={props.handleInputChange} />
          <input
          required
          type="text"
          name="email"
          value={props.newFriendEmail}
          onChange={props.handleInputChange}
          placeholder="Email"/>
          <button onClick={props.submitFriend}>Add New Friend</button>
      </form>
    </div>
  )
}

export default FriendForm
