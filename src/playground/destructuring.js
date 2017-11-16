// const person = {
//   age: 26,
//   location: {
//     city: 'Zakkamakka',
//     temp: 0,
//   },
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}`);

// const { temp: temperature, city } = person.location;
// if (typeof temperature === 'number' && city) {
//   console.log(`It's ${temperature}°C in ${city}`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin',
//   },
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);

const address = ['1299 S Juniper Street', 'Philladelphia', undefined, '19147'];

const [, city, state = 'NY'] = address;
console.log(`You are in ${city} ${state}`);

const item = ['coffee(hot)', '2', '2.5', '2.75'];

const [itemname, , itemprice] = item;
console.log(`A medium ${itemname} costs ${itemprice}`);
