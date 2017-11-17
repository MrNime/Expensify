import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = ({
  description = '', note = '', amount = 0, createdAt = 0,
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt,
  },
});

const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id,
});

const expensesReducerDefaultState = [];
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
};

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    default: {
      return state;
    }
  }
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'TEST':
      break;

    default: {
      return state;
    }
  }
};

const store = createStore(combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer,
}));

store.subscribe(() => {
  console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({
  description: 'Rent',
  amount: 25000,
}));
const expenseTwo = store.dispatch(addExpense({
  description: 'tutorial',
  amount: 1500,
}));

store.dispatch(removeExpense({ id: expenseOne.expense.id }));

const demoState = {
  expenses: [
    {
      id: 'dfhdskjlfhdf',
      description: 'november rent',
      note: 'rent for november 2017',
      amount: 25000,
      createdAt: 0,
    },
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount', // Date or amount
    startDate: undefined,
    endDate: undefined,
  },
};
