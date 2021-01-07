import React from 'react';
import Search from './Search.jsx';
import Chart from './Chart.jsx';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
    this.setData = this.setData.bind(this);
  }

  setData(data) {
    // this.setState({data: data})
  }
  render() {
    return (
      <div>
        <h1>BitCoin Tracker</h1>
        <Search data={this.state.data} setData={this.setData}/>
        <Chart data={this.state.data}/>
      </div>
    )
  };
};

export default App;