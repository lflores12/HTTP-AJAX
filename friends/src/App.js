import React from 'react';
import './App.css';
import axios from 'axios';
import Friends from './Friends/Friends';

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
  }

  render() {
    return (
      <div className="App">
      <h1>Friends</h1>
      <Friends friends = {this.state.friends} />
      </div>
    );
  }
}

export default App;
