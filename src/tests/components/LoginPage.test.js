import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('should render LoginPage', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
  const dispatchStartLogin = jest.fn();
  const wrapper = shallow(<LoginPage dispatchStartLogin={dispatchStartLogin} />);
  wrapper.find('button').simulate('click');
  expect(dispatchStartLogin).toHaveBeenCalled();
});
