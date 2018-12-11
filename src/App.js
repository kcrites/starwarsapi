import React, { Component } from 'react';
//import {starwars} from './starwars';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {  // creates state for 2 fields so that we can share them acrosss components
      starwars: [],
      searchfield: ''
      }
    }

  componentDidMount(){
    
    let  randomCategory = () => {
        let categories = [['people',87]
                          , ['planets', 61]
                          , ['films', 7]
                          , ['species', 37]
                          , ['vehicles', 39]
                          , ['starships',37]];
        let randomCategory = [];
        let categoryIndex = Math.floor(Math.random() * 6);
        randomCategory = categories[categoryIndex];
        return randomCategory;
      };

    
    let fetchString = () => {
        var cat = randomCategory();
        cat[1] = Math.floor(Math.random() * cat[1])+1;
        var fetchString = 'https://swapi.co/api/';
        fetchString = fetchString + cat[0] + '/' + cat[1] + '/';
        return fetchString;
      }

    let url = fetchString();

      fetch(url)
      .then(response => response.json())
      .then(users => this.setState({starwars: users}));
 
    }

  //captures changes to the searchbox field
  handleClick()  {
    console.log('onSC', this);
    this.render();
    
  }


    render() {

      const filteredStarwars = this.state.starwars;
      console.log('render');

       return (
          <div className='tc'>
           <h1>Star Wars</h1>
          
           <button onClick={(e) => this.handleClick(e)}>Another</button>
           <CardList starwars={this.state.starwars}/>
        </div>
        );
       }
}


export default App;
//
//brought filteredStarwars down into render function
//and changed <CardList to present filteredStarwars (results after change in search box)

// <SearchBox searchchange ={(this.onSearchChange())}/>