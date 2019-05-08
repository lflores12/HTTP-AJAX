import React from 'react';

function Friends (props){
    return (
        <div className = 'friend-list wrapper'>
            {props.friends.map(friend => <div className = 'friend-card' key = {friend.id}>
                <p>{friend.name}</p>
            </div>)}
        </div>
    )
}

export default Friends;