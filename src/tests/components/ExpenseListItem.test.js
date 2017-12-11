import React from 'react';
import { shallow } from 'enzyme';
import 'moment/locale/nl-be';
import numeral from 'numeral';
import 'numeral/locales/nl-be';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses.test';

beforeAll(() => {
  numeral.locale('nl-be');
});

test('should render ExpenseListItem', () => {
  const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});
