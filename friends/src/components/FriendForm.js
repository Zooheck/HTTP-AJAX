import React from 'react'
import '../App.css'
const FriendForm = (props) => {
  return (
    <div className="form-container">
      <form>
          <input
          required
          type="text"
          name="newFriendName"
          value={props.newFriendName}
          onChange={props.handleInputChange}
          placeholder="Name"/>
          <input
          required
          type="number"
          name="newFriendAge"
          value={props.newFriendAge}
          onChange={props.handleInputChange} />
          <input
          required
          type="text"
          name="newFriendEmail"
          value={props.newFriendEmail}
          onChange={props.handleInputChange}
          placeholder="Email"/>
          <button onClick={props.submitFriend}>Add New Friend</button>
      </form>
    </div>
  )
}

export default FriendForm
