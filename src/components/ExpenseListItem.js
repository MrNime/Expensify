import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({
  dispatch, id, description, amount, createdAt,
}) => (
  <div>
    <h4>{description}</h4>
    <p>€{amount}</p>
    <p>Created at: {createdAt}</p>
    <p>{id}</p>
    <button
      onClick={() => {
        dispatch(removeExpense({ id }));
      }}
    >
      Remove
    </button>
  </div>
);

export default connect()(ExpenseListItem);
