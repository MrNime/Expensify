import * as firebase from 'firebase';
import config from './config';

firebase.initializeApp(config);

const expenses = {
  expenses: [
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
    },
    {
      id: '3',
      description: 'Credit card',
      note: 'test',
      amount: 5400,
    },
  ],
};

const database = firebase.database();

// database.ref().set('test');

// database
//   .ref()
//   .set(expenses)
//   .then(() => console.log('data saved.'))
//   .catch(e => console.log(e));

// database.ref('expenses/0').set({ test: 'alle' });
// database.ref('expenses/0').remove();
