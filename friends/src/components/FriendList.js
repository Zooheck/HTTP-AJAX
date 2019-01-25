import React from 'react'
import Friend from './Friend'
const FriendList = (props) => {
  return (
    <div>
        <h1>Friend List</h1>
        {props.friends.map(friend => {
          return (
          <Friend
            deleteFriend={props.deleteFriend}
            populateForm={props.populateForm}
            id={friend.id}
            friend={friend}
            updateFriend={props.updateFriend}
            isUpdatingFriend={props.isUpdatingFriend}/
            >)
        })}
    </div>
  )
}

export default FriendList
