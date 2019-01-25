import React from 'react'
import '../App.css'
import './friend-form.css'
const FriendForm = (props) => {
  function handleSubmit(e) {
    e.preventDefault();
    if (props.isUpdatingFriend) {
      props.updateFriend();
    } else {
      props.submitFriend();
    }
  }
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
          <button onClick={handleSubmit}>{props.isUpdatingFriend ? "Update Friend" : "Add New Friend"}</button>
      </form>
    </div>
  )
}

export default FriendForm
