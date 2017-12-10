export default expenses =>
  expenses.map(expense => expense.amount).reduce((acc, amount) => acc + amount, 0);
