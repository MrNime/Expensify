import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  startAddExpense,
  addExpense,
  startEditExpense,
  editExpense,
  startRemoveExpense,
  removeExpense,
  startSetExpenses,
  setExpenses,
} from '../../actions/expenses';
import expenses from '../fixtures/expenses.test';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

const uid = 'mijnuidvoortesten';
const defaultAuthState = { auth: { uid } };

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({
    id, description, note, amount, createdAt,
  }) => {
    expensesData[id] = {
      description,
      note,
      amount,
      createdAt,
    };
  });
  database
    .ref(`users/${uid}/expenses`)
    .set(expensesData)
    .then(() => done());
});

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: 'abcdefghi' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 'abcdefghi',
  });
});

// using async/await
// test('should remove expense from firebase', async () => {
//   const store = createMockStore({});
//   const { id } = expenses[2];
//   await store.dispatch(startRemoveExpense({ id }));
//   const actions = store.getActions();
//   expect(actions[0]).toEqual({
//     type: 'REMOVE_EXPENSE',
//     id,
//   });
//   const snapshot = await database.ref(`expenses/${id}`).once('value');
//   expect(snapshot.val()).toBeFalsy();
// });

// using Promises
test('should remove expense from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const { id } = expenses[2];
  store
    .dispatch(startRemoveExpense({ id }))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'REMOVE_EXPENSE',
        id,
      });
      return database.ref(`users/${uid}/expenses/${id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toBe(null);
      done();
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

// using async/await
// test('should edit expense from firebase', async () => {
//   const store = createMockStore({});
//   const { id } = expenses[0];
//   const updates = { amount: 8321.34 };
//   await store.dispatch(startEditExpense(id, updates));
//   const actions = store.getActions();
//   expect(actions[0]).toEqual({
//     type: 'EDIT_EXPENSE',
//     id,
//     updates,
//   });
//   const snapshot = await database.ref(`expenses/${id}`).once('value');
//   expect(snapshot.val().amount).toBe(updates.amount);
// });

// using Promises
test('should edit expense from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  const { id } = expenses[0];
  const updates = { amount: 8321.34 };
  store
    .dispatch(startEditExpense(id, updates))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'EDIT_EXPENSE',
        id,
        updates,
      });
      return database.ref(`users/${uid}/expenses/${id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val().amount).toBe(updates.amount);
      done();
    });
});

test('should setup add expense action object with provided values', () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2],
  });
});

// async/await
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

// Promises
test('should add expense to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
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
      return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData);
      done();
    });
});

test('should add expense with defaults to database and store', (done) => {
  const store = createMockStore(defaultAuthState);
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
      return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(defaultExpense);
      done();
    });
});

test('should setup set expense action object with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses,
  });
});

// async/await
// test('should fetch expenses from firebase', async () => {
//   const store = createMockStore({});
//   await store.dispatch(startSetExpenses());
//   const actions = store.getActions();
//   expect(actions[0]).toEqual({
//     type: 'SET_EXPENSES',
//     // de expenses worden van firebase gehaald, het id wordt in het object gestoken en
//     // dat object wordt verzonden in de setExpenses call, dus onze fixtures hebben de
//     // juiste vorm al
//     expenses,
//   });
// });

// Promises
test('should fetch expenses from firebase', (done) => {
  const store = createMockStore(defaultAuthState);
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      // de expenses worden van firebase gehaald, het expenseid wordt in het object gestoken en
      // dat object wordt verzonden in de setExpenses call, dus onze fixtures hebben de
      // juiste vorm al
      expenses,
    });
    done();
  });
});
