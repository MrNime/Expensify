import moment from 'moment';

// Get visible expenses
export default (expenses, {
  text, sortBy, sortDirection, startDate, endDate,
}) =>
  expenses
    .filter((expense) => {
      const createdAtMoment = moment(expense.createdAt);
      const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
      const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
      const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        if (sortDirection === 'descending') {
          return a.createdAt < b.createdAt ? 1 : -1;
        }
        return a.createdAt < b.createdAt ? -1 : 1;
      } else if (sortBy === 'amount') {
        if (sortDirection === 'descending') {
          return a.amount < b.amount ? 1 : -1;
        }
        return a.amount < b.amount ? -1 : 1;
      } else if (sortBy === 'description') {
        if (sortDirection === 'descending') {
          return a.description < b.description ? -1 : 1;
        }
        return a.description < b.description ? 1 : -1;
      } else if (sortBy === 'paid') {
        if (sortDirection === 'descending') {
          return a.paidAmount < b.paidAmount ? -1 : 1;
        }
        return a.paidAmount < b.paidAmount ? 1 : -1;
      } else if (sortBy === 'saved') {
        if (sortDirection === 'descending') {
          return a.amount - a.paidAmount <= b.amount - b.paidAmount ? 1 : -1;
        }
        return a.amount - a.paidAmount <= b.amount - b.paidAmount ? -1 : 1;
      }
    });
