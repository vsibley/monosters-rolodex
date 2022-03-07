import { Component } from "react";
import CardList from './componenets/card-list/card-list.components';
import SearchBox from './componenets/search-box/search-box.component';
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
    // console.log('constructor');
  }

  componentDidMount() {
    // console.log('componetDidMount');
    fetch('  https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users }
          },
          () => {
            console.log(this.state);
          }
        ));
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(
      () => {
        return { searchField };
      }
    );
  }

  render() {
    // console.log('render');

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;


    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });


    return <div className="App">
      <SearchBox
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeholder={'Search monsters'} />

      <CardList monsters={filteredMonsters} />
    </div>;
  }
}

export default App;

