import React, { Component } from 'react';
import plantFacts from './plantData';


class FactText extends Component {
 
  facts = plantFacts[Math.floor(Math.random() * plantFacts.length)]

  render() {
    return (
      <div>
        <h2>{this.facts.fact}</h2>
        <h2>{this.facts.author}</h2>
      </div>
    );
  }
}

export default FactText;
