import React from 'react';
import classes from './Order.module.css';
const order = props => {
  const ingredients = [];
  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    });
  }
  const ingredientOutput = ingredients.map(ig => {
    return (
      <span
        key={ig.name}
        style={{
          textTransform: 'Uppercase',
          border: '3px solid #eee',
          borderRadius: '10px',
          display: 'inline-block',
          padding: '4px',
          margin: '7px'
        }}
      >
        {ig.name} {ig.amount}
      </span>
    );
  });
  return (
    <div className={classes.Order}>
      <p style={{ display: 'inline' }}> Ingredients: {ingredientOutput}</p>
      <p>
        Price:{' '}
        <strong>USD: {Number.parseFloat(props.price).toFixed(2)} </strong>
      </p>
    </div>
  );
};

export default order;
