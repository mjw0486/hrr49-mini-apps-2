import React from 'react';
import Search from './Search.jsx';
import Charts from './Charts.jsx';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
    this.setData = this.setData.bind(this);
  }

  setData(data) {
    this.setState({data: data})
  }
  render() {
    return (
      <div>
        <h1>BitCoin Tracker</h1>
        <Search data={this.state.data} setData={this.setData}/>
        <Charts data={this.state.data}/>
      </div>
    )
  };
};

export default App;