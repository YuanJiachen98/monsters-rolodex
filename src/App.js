import React from 'react';
import {CardList} from'./components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

import './App.css';
// import reactDom from 'react-dom';


class App extends React.Component {
  constructor(){
    super();

    this.state ={
      monsters: [],
      searchField: ''
    };

    this.handleChange = this.handleChange.bind(this);

  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => this.setState({monsters:users}))

  };

  handleChange(e) {
    this.setState({searchField:e.target.value})
  }
  //handleChange = e=> {} // no need to bind this
  render(){
    const { monsters, searchField } = this.state;
    //equals: const monsters = this.state.monsters
    // const searchField = this.state.searchField
    const filterMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return(
      <div className='App'>
      <h1>Monsters Rolodex</h1>
      <SearchBox
        placeholder = 'search monsters'
        handleChange = {this.handleChange}
      />
     
      <CardList monsters = {filterMonsters}/>     
    </div>
    );
  } 
}

export default App;
