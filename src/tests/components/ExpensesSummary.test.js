import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly render ExpensesSummary with 0 expenses', () => {
  const wrapper = shallow(<ExpensesSummary
    visibleExpenseCount={0}
    visibleExpenseTotal={0}
    invisibleExpenseCount={0}
    invisibleExpenseTotal={0}
  />);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with 1 expense', () => {
  const wrapper = shallow(<ExpensesSummary
    visibleExpenseCount={1}
    visibleExpenseTotal={123}
    invisibleExpenseCount={0}
    invisibleExpenseTotal={0}
  />);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummary with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary
    visibleExpenseCount={14}
    visibleExpenseTotal={123456789}
    invisibleExpenseCount={0}
    invisibleExpenseTotal={0}
  />);
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpensesSummeray with 1 filtered expense', () => {
  const wrapper = shallow(<ExpensesSummary
    visibleExpenseCount={14}
    visibleExpenseTotal={123456789}
    invisibleExpenseCount={1}
    invisibleExpenseTotal={23894}
  />);
  expect(wrapper).toMatchSnapshot();
})

test('should correctly render ExpensesSummeray with multiple filtered expenses', () => {
  const wrapper = shallow(<ExpensesSummary
    visibleExpenseCount={14}
    visibleExpenseTotal={123456789}
    invisibleExpenseCount={832}
    invisibleExpenseTotal={23894101903}
  />);
  expect(wrapper).toMatchSnapshot();
})

