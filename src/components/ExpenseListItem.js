import React from 'react';

const ExpenseListItem = ({ description, amount, createdAt }) => (
  <div>
    <h4>{description}</h4>
    <p>€{amount}</p>
    <p>Created at: {createdAt}</p>
    <br />
  </div>
);

export default ExpenseListItem;
