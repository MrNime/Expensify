export default expenses =>
  expenses.map(expense => expense.amount).reduce((acc, amount) => acc + amount, 0);

export const savedTotal = expenses =>
  expenses
    .map(expense => expense.amount - (expense.paidAmount ? expense.paidAmount : 0))
    .reduce((acc, savings) => acc + savings, 0);
