import React from 'react';
import './friends.css'

function Friends (props){
    return (
        <div className = 'friend-list wrapper'>
            {props.friends.map(friend => 
            <div className = 'friend-card' key = {friend.id}>
                <p>{friend.name}</p>
                <p>{friend.age}</p>
                <p>{friend.email}</p>
            </div>)}
        </div>
    )
}

export default Friends;