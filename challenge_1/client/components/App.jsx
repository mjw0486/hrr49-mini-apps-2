import React from 'react';
import SearchBar from './SearchBar.jsx';
import SearchResults from './SearchResults.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: 'history',
    };
  };

  render() {
    return(
    <div>
      <h1 className='header'>History Search</h1>
      <SearchBar keyword={this.state.keyword}/>
    </div>
    )
  };
};

export default App