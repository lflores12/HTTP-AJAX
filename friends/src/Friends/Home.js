import React from 'react';

function Home(props) {
    const routeToFriends = event => {
        event.preventDefault();
        props.history.push('./friends')
    };

    return (
        <div className= 'home-wrapper'>
            <h1>Welcome to your Friends App</h1>
            <button onClick = {routeToFriends} className = 'home-button'>Go To Friends List</button>
        </div>
    );
}

export default Home;