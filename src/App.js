import logo from './logo.svg';
import './App.css';
import { Component, createRef } from "react";

const testData = [
  {
    "avatar_url": "https://avatars.githubusercontent.com/u/810438?v=4",
    "name": "dan",
    "company": "Facebook",
  },
  {
    "avatar_url": "https://avatars.githubusercontent.com/u/47673723?v=4",
    "name": "Jimmy",
    "company": "Twitter ",
  },
  {
    "avatar_url": "https://avatars.githubusercontent.com/u/1674?v=4",
    "name": "Jason",
    "company": "Snapchat",
  },
  {
    "avatar_url": "https://avatars.githubusercontent.com/u/100828?v=4",
    "name": "Sophie Essen",
    "company": "SETI Institute",

  }
]


const CardList = (props) => (
  <div>
    {props.profiles.map(profile => <Card {...profile}/>)}
  </div>
);

class Card extends Component {
  render() {
    const profile = this.props
    return (
      <div className="github-profile">
        <img src={profile.avatar_url} alt='avatar'/>
        <div className="info">
          <div className="name" style={{fontSize:'125%'}}>{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    )
  }
}

class Form extends Component{
  state = {userName: ''}
  handleSubmit = (event) =>{
    event.preventDefault();
    console.log(
      this.userNameInput.current.value
    )
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.userName} onChange={event => this.setState({ userName: event.target.value })} placeholder="GitHub username" required/>
        <button>Add card</button>
      </form>
    )
  }
}

class Main extends Component {
  state = {profiles: testData};
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form />
        <CardList profiles={this.state.profiles}/>
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

