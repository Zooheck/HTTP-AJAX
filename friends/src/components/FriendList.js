import React from 'react'
import Friend from './Friend'
const FriendList = (props) => {
  return (
    <div>
        <h1>Friend List</h1>
        {props.friends.map(friend => {
          return <Friend friend={friend} updateFriend={props.updateFriend}/>
        })}
    </div>
  )
}

export default FriendList
