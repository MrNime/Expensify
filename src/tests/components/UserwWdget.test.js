import React from 'react';
import { shallow } from 'enzyme';
import { UserWidget } from '../../components/UserWidget';

test('should call startLogout on button click', () => {
  const dispatchStartLogout = jest.fn();
  const wrapper = shallow(<UserWidget dispatchStartLogout={dispatchStartLogout} />);
  wrapper.find('button').simulate('click');
  expect(dispatchStartLogout).toHaveBeenCalled();
});
