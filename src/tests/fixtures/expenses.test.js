import moment from 'moment';

const expenses = [
  {
    id: '1',
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: 0,
  },
  {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0)
      .subtract(4, 'days')
      .valueOf(),
  },
  {
    id: '3',
    description: 'Credit card',
    note: '',
    amount: 5400,
    createdAt: moment(0)
      .add(4, 'days')
      .valueOf(),
  },
];

test('should have test expenses array', () => {
  expect(expenses.length).toBeGreaterThan(0);
});

export default expenses;
