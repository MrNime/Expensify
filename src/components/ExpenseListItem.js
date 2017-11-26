import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({
  id, description, amount, createdAt,
}) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h4>{description}</h4>
    </Link>
    <p>€{(amount / 100).toFixed(2)}</p>
    <p>Created at: {moment(createdAt).format('DD/MM/YYYY')}</p>
    <p>id for dev: {id}</p>
  </div>
);

export default ExpenseListItem;
