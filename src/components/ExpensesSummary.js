import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({
  visibleExpenseCount,
  visibleExpenseTotal,
  invisibleExpenseCount,
  invisibleExpenseTotal,
}) => {
  const visibleExpenseWord = visibleExpenseCount === 1 ? 'expense' : 'expenses';
  const formattedVisibleExpenseTotal = numeral(visibleExpenseTotal / 100).format('$0,0.00');
  const invisibleExpenseWord = invisibleExpenseCount === 1 ? 'expense' : 'expenses';
  const formattedInvisibleExpenseTotal = numeral(invisibleExpenseTotal / 100).format('$0,0.00');
  return (
    <div className="page-header">
      <div className="content-container">
        <div className="page-header__content">
          <h1 className="page-header__title">
            Viewing <span>{visibleExpenseCount}</span> {visibleExpenseWord} totalling{' '}
            <span>{formattedVisibleExpenseTotal}</span>
          </h1>
          <div className="page-header__section">
            <Link className="button" to="/create">
              Add Expense
            </Link>
            <h3 className="page-header__subtitle">
              Filtering <span>{invisibleExpenseCount}</span> {invisibleExpenseWord} totalling{' '}
              <span>{formattedInvisibleExpenseTotal}</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    visibleExpenseCount: visibleExpenses.length,
    visibleExpenseTotal: selectExpensesTotal(visibleExpenses),
    invisibleExpenseCount: state.expenses.length - visibleExpenses.length,
    invisibleExpenseTotal:
      selectExpensesTotal(state.expenses) - selectExpensesTotal(visibleExpenses),
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
