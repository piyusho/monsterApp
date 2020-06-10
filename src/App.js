import React from 'react';
import {SearchBox} from "./components/search-box/search-box.component"
import './App.css';
import { CardList } from './components/card-list/card-list.component';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  handleChange=(e)=>(this.setState({searchField:e.target.value}))
    
    
  
  render() {
    const {monsters,searchField} = this.state; 
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
    return (//onChange is a synthetic event that we use to detect the DOM event,and update the State.State is somhting that changes in our app die to user action
      <div className="App"> 
      <h1>MOnster-O-Rolodexo</h1>
   <SearchBox placeholder="Search Monsters!" handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters }></CardList>
      </div>
    );
  }
}

export default App;
