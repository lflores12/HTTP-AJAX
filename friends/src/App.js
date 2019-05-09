import React from 'react';
import './App.css';
import axios from 'axios';
import Friends from './Friends/Friends';
import Home from './Friends/Home';
import { BrowserRouter as Router, Route, NavLink, withRouter } from 'react-router-dom';
import FriendForm from './Friends/FriendForm';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount(){
    axios.get('http://localhost:5000/friends')
    .then(res =>{
      console.log(res);
      this.setState({friends:res.data})
    })

    .catch(err =>{
      console.log(err);
    })
  };

  addFriend = friend => {
    axios
    .post('http://localhost:5000/friends',friend)
    .then( res => {
      this.setState({friends: res.data});
      this.props.history.push('./friends')
    })
    .catch( err => console.log(err));
  };

  render() {
    return (
      <div className="App">
      <h1>Friends</h1>

      <Route exact path = '/' component = {Home}/>
      <Route 
        exact path = '/friends' 
        render = {props => (
          <Friends {...props} 
          friends = {this.state.friends}
        />)} />
      <Route 
        path = '/friend-form'
        render = {props => <FriendForm {...props} addFriend = {this.addFriend} />}
      />
      </div>
    );
  }
}

export default App;
