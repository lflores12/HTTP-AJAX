import React from 'react';

class FriendForm extends React.Component {
    
    state = {
        friend: {
            name: '',
            age: '',
            email: ''
        }
    };

    changeHandler = event => {
        let value = event.target.value;
        const name = event.target.name;
        this.setState(prevState => ({
            friend:{
                ...prevState.friend, 
                [name]:value
            }
        }));
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.addFriend(this.state.friend);
    }; 

    render() {
        return(
            <div>
                <h2>Add New Friend</h2>
                <form onSubmit = {this.handleSubmit} >
                    <input
                        type="text"
                        name="name"
                        onChange={this.changeHandler}
                        placeholder="name"
                        value={this.state.friend.name}
                    />
                    <input
                        type="number"
                        name="age"
                        onChange={this.changeHandler}
                        placeholder="age"
                        value={this.state.friend.age}
                    />
                    <input
                        type="string"
                        name="email"
                        onChange={this.changeHandler}
                        placeholder="email"
                        value={this.state.friend.email}
                    />

                    <button className='add-friend-btn'>Add New Friend</button>
                </form>
            </div>
        );
    }
}

export default FriendForm;