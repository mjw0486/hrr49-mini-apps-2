import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      availablePins: 10,
      frameScores: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
        7: 0,
        8: 0,
        9: 0,
        10: 0
      },
      totalScore: 0,
      firstRoll: true,
      secondRoll: false,
      extraRoll: false,
      doubleExtraRoll: false,
      openFrame: false,
      spare: false,
      strike: false,
      currentFrame: 1,
      frameResults: {
        1: {
          firstRoll: 0,
          secondRoll: 0,
          extraRoll: 0,
          doubleExtraRoll: 0,
          frameResult: '',
        },
        2: {
          firstRoll: 0,
          secondRoll: 0,
          extraRoll: 0,
          doubleExtraRoll: 0,
          frameResult: '',
        },
        3: {
          firstRoll: 0,
          secondRoll: 0,
          extraRoll: 0,
          doubleExtraRoll: 0,
          frameResult: '',
        },
        4: {
          firstRoll: 0,
          secondRoll: 0,
          extraRoll: 0,
          doubleExtraRoll: 0,
          frameResult: '',
        },
        5: {
          firstRoll: 0,
          secondRoll: 0,
          extraRoll: 0,
          doubleExtraRoll: 0,
          frameResult: '',
        },
        6: {
          firstRoll: 0,
          secondRoll: 0,
          extraRoll: 0,
          doubleExtraRoll: 0,
          frameResult: '',
        },
        7: {
          firstRoll: 0,
          secondRoll: 0,
          extraRoll: 0,
          doubleExtraRoll: 0,
          frameResult: '',
        },
        8: {
          firstRoll: 0,
          secondRoll: 0,
          extraRoll: 0,
          doubleExtraRoll: 0,
          frameResult: '',
        },
        9: {
          firstRoll: 0,
          secondRoll: 0,
          extraRoll: 0,
          doubleExtraRoll: 0,
          frameResult: '',
        },
        10: {
          firstRoll: 0,
          secondRoll: 0,
          extraRoll: 0,
          doubleExtraRoll: 0,
          frameResult: '',
        }
      }
    }
  }
  render(){
    return (
      <div>
        hello react
      </div>
    )
  };
};

export default App;