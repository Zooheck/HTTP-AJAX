import React from 'react'
import '../App.css'
const Friend = (props) => {
    return(
        <div className="friend-card">
            <h2>Name: {props.friend.name}</h2>
            <h3>Age: {props.friend.age}</h3>
            <h3>Email: {props.friend.email}</h3>
            <button onClick={() => props.populateForm(props.friend.id)}>Update</button>
            <button onClick={() => props.deleteFriend(props.friend.id)}>Delete Friend</button>
        </div>
    )
}

export default Friend