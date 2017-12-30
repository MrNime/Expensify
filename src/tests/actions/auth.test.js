import { login, logout } from '../../actions/auth';

test('should setup login action object', () => {
  const uid = 'abcdefghijklmnopqrstuvwxyz';
  const displayName = 'Test User';
  const photoURL = 'https://www.thistotallydoesnotexist.com/aphotourl.jpg';
  const action = login({ uid, displayName, photoURL });
  expect(action).toEqual({
    type: 'LOGIN',
    uid,
    displayName,
    photoURL,
  });
});

test('should setup logout action object', () => {
  const action = logout();
  expect(action).toEqual({
    type: 'LOGOUT',
  });
});
