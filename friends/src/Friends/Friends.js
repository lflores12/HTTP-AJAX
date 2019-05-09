import React from 'react';
import './friends.css'
import { NavLink } from 'react-router-dom';

function Friends (props){
    return (
        <div className = 'friend-list wrapper'>
            <div>
                <NavLink to = '/friend-form'> Add Friend</NavLink>
            </div>
            
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