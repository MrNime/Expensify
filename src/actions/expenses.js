import database from '../firebase/firebase';

export const addExpense = expense => ({
  type: 'ADD_EXPENSE',
  expense,
});

export const startAddExpense = (expenseData = {}) => (dispatch, getState) => {
  const { uid } = getState().auth;
  const {
    description = '', note = '', amount = 0, createdAt = 0,
  } = expenseData;
  const expense = {
    description,
    note,
    amount,
    createdAt,
  };
  return database
    .ref(`users/${uid}/expenses`)
    .push(expense)
    .then((ref) => {
      dispatch(addExpense({
        ...expense,
        id: ref.key,
      }));
    });
};

export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id,
});

export const startRemoveExpense = ({ id } = {}) => (dispatch, getState) =>
  database
    .ref(`users/${getState().auth.uid}/expenses/${id}`)
    .remove()
    .then(() => {
      dispatch(removeExpense({ id }));
    });

export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});

export const startEditExpense = (id, updates) => (dispatch, getState) =>
  database
    .ref(`users/${getState().auth.uid}/expenses/${id}`)
    .update(updates)
    .then(() => {
      dispatch(editExpense(id, updates));
    });

export const setExpenses = expenses => ({
  type: 'SET_EXPENSES',
  expenses,
});

export const startSetExpenses = () => (dispatch, getState) => {
  const { uid } = getState().auth;
  const expensesData = [];
  return database
    .ref(`users/${uid}/expenses`)
    .once('value')
    .then((snapshot) => {
      snapshot.forEach((childSnapshot) => {
        expensesData.push({
          id: childSnapshot.key,
          ...childSnapshot.val(),
        });
      });
    })
    .then(() => {
      dispatch(setExpenses(expensesData));
    });
};
