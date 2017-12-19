import * as firebase from 'firebase';
import config from './config';

firebase.initializeApp(config);
const database = firebase.database();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// const expenses = [
//   {
//     id: '1',
//     description: 'Gum',
//     note: '',
//     amount: 195,
//     createdAt: 0,
//   },
//   {
//     id: '2',
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//   },
//   {
//     id: '3',
//     description: 'Credit card',
//     note: 'test',
//     amount: 5400,
//   },
// ];

// database.ref().set('test');

// database
//   .ref()
//   .set(expenses)
//   .then(() => console.log('data saved.'))
//   .catch(e => console.log(e));

// database.ref('expenses/0').set({ test: 'alle' });
// database.ref('expenses/0').remove();

// werkt wel, update enkel object in reference
// nieuwe dingen toevoegen en bestaande verwijderen kan ook
// database.ref('expenses/0').update({ amount: 9999, iets_nieuw: 'dit is nieuw', note: null });

// werkt niet, delete al de rest ook
// database.ref().update({ expenses: [{ amount: 12345 }] });

// database.ref().update({
//   'expenses/0/iets_nieuw': 'blablablabla',
// });

// database.ref().update({ 'expenses/0/amount': 1 });

// const onValueChange = database
//   .ref()
//   .on(
//     'value',
//     snapshot => console.log(snapshot.val()),
//     e => console.log('error with subscription', e),
//   );

// setTimeout(() => {
//   database.ref().update({ 'expenses/0/amount': 2 });
// }, 3000);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 6000);

// setTimeout(() => {
//   database.ref().update({ 'expenses/0/amount': 3 });
// }, 9000);

// database.ref('expenses/0').on(
//   'value',
//   (snapshot) => {
//     const expense = snapshot.val();
//     console.log(`The expense: ${expense.description} costs €${(expense.amount / 100).toFixed(2)}`);
//   },
//   e => console.log('error while fetching changed data', e),
// );

// setTimeout(() => {
//   database.ref('expenses/0').update({ amount: 500 });
// }, 3500);

// expenses.map(expense => database.ref().push(expense));

// database.ref().on('value', (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       ...childSnapshot.val(),
//       id: childSnapshot.key,
//     });
//   });
//   console.log(expenses);
// });

// expenses.map(expense => database.ref('expenses').push(expense));
// database.ref('expenses')
// .on('child_removed', snapshot => console.log(snapshot.key, snapshot.val()));
// database.ref('expenses').on('child_changed', snapshot => console.log(snapshot.key, snapshot.val()));
