import React from 'react';
import './card.styles.css';
export const Card = (props) => (
  <div className="card-container">
    <img
      alt="monster"
      src={`https://robohash.org/${props.monster.name}.png?set=set2&size=180x200`}/>
    <h2>{props.monster.name}</h2>
<h2>{props.monster.email}</h2>
  </div>
);
