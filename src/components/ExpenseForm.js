import React, { Component } from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toFixed(2).toString() : '',
      paidAmount: props.expense ? (props.expense.paidAmount / 100).toFixed(2).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: '',
    };
  }

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;
    const regex = /^\d{1,}(\.\d{0,2})?$/;
    if (!amount || amount.match(regex)) {
      this.setState(() => ({ amount }));
    }
  };
  onPaidAmountChange = (e) => {
    const paidAmount = e.target.value;
    const regex = /^\d{1,}(\.\d{0,2})?$/;
    if (!paidAmount || paidAmount.match(regex)) {
      this.setState(() => ({ paidAmount }));
    }
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onCalendarFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide a description and an amount' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        paidAmount: this.state.paidAmount
          ? parseFloat(this.state.paidAmount, 10) * 100
          : parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
      });
    }
  };
  componentDidMount() {
    this.amountInput.focus();
  }
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          type="text"
          placeholder="Description"
          className="text-input"
          ref={(el) => {
            this.amountInput = el;
          }}
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <input
          type="text"
          placeholder="Amount"
          className="text-input"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        <input
          type="text"
          placeholder="Paid Amount"
          className="text-input"
          value={this.state.paidAmount}
          onChange={this.onPaidAmountChange}
        />
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onCalendarFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          displayFormat="DD/MM/YYYY"
        />
        <textarea
          className="textarea"
          placeholder="Add a note for your expense (optional)"
          value={this.state.note}
          onChange={this.onNoteChange}
        />
        <div>
          <button className="button">Save Expense</button>
        </div>
      </form>
    );
  }
}
