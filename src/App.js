import React from 'react';
import './App.css'
import Card from './Card';
import GuessCount from './GuessCount';
import './Card.css'

class App extends React.Component {
  render() {
    return( 
    <div className="memory" >
      <GuessCount guesses={0} />
      <Card card="🙂" feedback="hidden" />
      <Card card="🎭" feedback="justMatched" />
      <Card card="🤕" feedback="justMismatched" />
      <Card card="🐥" feedback="visible" />
      <Card card="🍩" feedback="hidden" />
      <Card card="F" feedback="justMatched" />

    </div>
    )
  }
}


export default App;