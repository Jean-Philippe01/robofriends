import React, {Component} from 'react';
import Card from './Card';


const CardList = ({robots}) => {
  return (
    <div>
      {robots.map((user, i) => (
        <Card 
          key={i} 
          id={robots[i].id} 
          name={robots[i].name} 
          email={robots[i].email} />
      ))}
    </div>
  );
};


export default CardList;