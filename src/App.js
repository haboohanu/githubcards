import logo from './logo.svg';
import './App.css';
import { Component, createRef } from "react";
import axios from 'axios';


const CardList = (props) => (
  <div>
    {props.profiles.map(profile => <Card key={profile.id}{...profile} />)}
  </div>
);

class Card extends Component {
  render() {
    const profile = this.props
    return (
      <div className="github-profile">
        <img src={profile.avatar_url} alt='avatar' />
        <div className="info">
          <div className="name" style={{ fontSize: '125%' }}>{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    )
  }
}

class Form extends Component {
  state = { userName: '' }
  handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get(`https://api.github.com/users/${this.state.userName}`)
    this.props.onSubmit(response.data)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.userName} onChange={event => this.setState({ userName: event.target.value })} placeholder="GitHub username" required />
        <button>Add card</button>
      </form>
    )
  }
}

class Main extends Component {
  state = { profiles: [] };
  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }))
  }

  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    )
  }
}



function App() {
  return (
    <div className="App">
      <Main title="The GitHub Cards App" />
    </div>
  );
}

export default App;

