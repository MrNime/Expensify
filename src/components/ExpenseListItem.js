import React from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({
  id, description, amount, paidAmount, createdAt,
}) => (
  <Link className="list-item" to={`/edit/${id}`}>
    <div className="list-item__summary">
      <h3 className="list-item__title">{description}</h3>
      <span className="list-item__subtitle">{moment(createdAt).format('Do MMMM YYYY')}</span>
    </div>
    <div className="list-item__amounts">
      <h3 className="list-item__data">{numeral(amount / 100).format('$0,0.00')}</h3>
      <h3 className="list-item__data list-item__data--small">
        {numeral(paidAmount / 100).format('$0,0.00')}
      </h3>
      <h3 className="list-item__data list-item__data--small">
        {numeral((amount - paidAmount) / 100).format('$0,0.00')}
      </h3>
    </div>
  </Link>
);

export default ExpenseListItem;
