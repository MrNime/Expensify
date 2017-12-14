import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses.test';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: 'abcdefghi' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 'abcdefghi',
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('123', {
    note: 'new value',
  });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123',
    updates: {
      note: 'new value',
    },
  });
});

test('should setup add expense action object with provided values', () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2],
  });
});

// asyn/await way
// test('should add expense to database and store', async () => {
//   const store = createMockStore({});
//   const expenseData = {
//     description: 'mouse',
//     createdAt: 75675754,
//     note: 'This one is better',
//     amount: 3000,
//   };
//   await store.dispatch(startAddExpense(expenseData));
//   const actions = store.getActions();
//   expect(actions[0]).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       ...expenseData,
//       id: expect.any(String),
//     },
//   });
//   const snapshot = await database.ref(`expenses/${actions[0].expense.id}`).once('value');
//   expect(snapshot.val()).toEqual(expenseData);
// });

// Promises way
test('should add expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'mouse',
    createdAt: 75675754,
    note: 'This one is better',
    amount: 3000,
  };
  store
    .dispatch(startAddExpense(expenseData))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          ...expenseData,
          id: expect.any(String),
        },
      });
      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test('should add expense with defaults to database and store', (done) => {
  const store = createMockStore({});
  const defaultExpense = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0,
  };
  store
    .dispatch(startAddExpense())
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
          ...defaultExpense,
          id: expect.any(String),
        },
      });
      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(defaultExpense);
      done();
    });
});

// test('should setup add expense action object with default values', () => {
//   const action = addExpense();
//   expect(action).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       id: expect.any(String),
//       amount: 0,
//       createdAt: 0,
//       description: '',
//       note: '',
//     },
//   });
// });
