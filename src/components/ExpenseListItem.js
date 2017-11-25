import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({
  dispatch, id, description, amount, createdAt,
}) => (
  <div>
    <h4>{description}</h4>
    <p>€{(amount / 100).toFixed(2)}</p>
    <p>Created at: {moment(createdAt).format('DD/MM/YYYY')}</p>
    <p>id for dev: {id}</p>
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
