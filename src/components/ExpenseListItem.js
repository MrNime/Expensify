import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({
  id, description, amount, createdAt,
}) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h4>{description}</h4>
    </Link>
    <p>{numeral(amount / 100).format('$0,0.00')}</p>
    {
      //    <p>€{(amount / 100).toFixed(2)}</p>
    }
    <p>{moment(createdAt).format('DD/MM/YYYY')}</p>
  </div>
);

export default ExpenseListItem;
