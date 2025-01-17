import React, {Component} from 'react';
import Card from './Card';
import {robots} from './Robots';

const CardList = () => {
  return (
    <div>
      {robots.map((robot, i) => (
        <Card key={i} id={robot.id} name={robot.name} email={robot.email} />
      ))}
    </div>
  );
};


export default CardList;