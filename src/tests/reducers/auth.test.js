import authReducer from '../../reducers/auth';

test('should set default state', () => {
  const state = authReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({});
});

test('should set uid for login', () => {
  const action = {
    type: 'LOGIN',
    uid: 'testUIDhier',
  };
  const state = authReducer(null, action);
  expect(state.uid).toBe(action.uid);
});

test('should clear uid for logout', () => {
  const action = { type: 'LOGOUT' };
  const state = authReducer({ uid: 'er staat hier iets' }, action);
  expect(state).toEqual({});
});
