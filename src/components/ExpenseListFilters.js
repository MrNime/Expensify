import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';

import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
  clearFilters,
  sortAscending,
  sortDescending,
  sortByDescription,
  sortByPaid,
  sortBySaved,
} from '../actions/filters';

export class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null,
  };
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };
  onCalendarFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  };
  onSortChange = (e) => {
    switch (e.target.value) {
      case 'date':
        this.props.sortByDate();
        break;
      case 'amount':
        this.props.sortByAmount();
        break;
      case 'description':
        this.props.sortByDescription();
        break;
      case 'paid':
        this.props.sortByPaid();
        break;
      case 'saved':
        this.props.sortBySaved();
        break;
      default:
        break;
    }
  };
  onDirectionChange = (e) => {
    // eslint-disable-next-line
    e.target.value === 'descending' ? this.props.sortAscending() : this.props.sortDescending();
  };
  onClearFilters = () => {
    this.props.clearFilters();
  };
  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              type="text"
              className="text-input"
              placeholder="Search expenses"
              value={this.props.filters.text}
              onChange={this.onTextChange}
            />
          </div>
          <div className="input-group__item">
            <select
              className="select"
              value={this.props.filters.sortBy}
              onChange={this.onSortChange}
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
              <option value="description">Description</option>
              <option value="paid">Paid</option>
              <option value="saved">Saved</option>
            </select>
            <button
              className="sort-direction"
              onClick={this.onDirectionChange}
              value={this.props.filters.sortDirection}
            >
              {this.props.filters.sortDirection === 'descending' ? (
                <svg
                  className="DayPickerNavigation_svg__horizontal DayPickerNavigation_svg__horizontal_1"
                  viewBox="0 0 1000 1000"
                >
                  <path d="M967.5 288.5L514.3 740.7c-11 11-21 11-32 0L29.1 288.5c-4-5-6-11-6-16 0-13 10-23 23-23 6 0 11 2 15 7l437.2 436.2 437.2-436.2c4-5 9-7 16-7 6 0 11 2 16 7 9 10.9 9 21 0 32z" />
                </svg>
              ) : (
                <svg
                  className="DayPickerNavigation_svg__horizontal DayPickerNavigation_svg__horizontal_1"
                  viewBox="0 0 1000 1000"
                >
                  <path d="M32.1 712.6l453.2-452.2c11-11 21-11 32 0l453.2 452.2c4 5 6 10 6 16 0 13-10 23-22 23-7 0-12-2-16-7L501.3 308.5 64.1 744.7c-4 5-9 7-15 7-7 0-12-2-17-7-9-11-9-21 0-32.1z" />
                </svg>
              )}
            </button>
          </div>
          <div className="input-group__item">
            <DateRangePicker
              startDate={this.props.filters.startDate}
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onCalendarFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false}
              displayFormat="DD/MM/YYYY"
            />
          </div>
          <div className="input-group__item">
            <button
              type="button"
              aria-label="Clear Dates"
              className="DateRangePickerInput_clearDates DateRangePickerInput_clearDates_1 clear-button"
              onClick={this.onClearFilters}
            >
              <svg
                className="DateRangePickerInput_clearDates_svg DateRangePickerInput_clearDates_svg_1"
                viewBox="0 0 12 12"
              >
                <path
                  fillRule="evenodd"
                  d="M11.53.47a.75.75 0 0 0-1.061 0l-4.47 4.47L1.529.47A.75.75 0 1 0 .468 1.531l4.47 4.47-4.47 4.47a.75.75 0 1 0 1.061 1.061l4.47-4.47 4.47 4.47a.75.75 0 1 0 1.061-1.061l-4.47-4.47 4.47-4.47a.75.75 0 0 0 0-1.061z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  filters: state.filters,
});

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  sortByDescription: () => dispatch(sortByDescription()),
  sortByPaid: () => dispatch(sortByPaid()),
  sortBySaved: () => dispatch(sortBySaved()),
  setStartDate: startDate => dispatch(setStartDate(startDate)),
  setEndDate: endDate => dispatch(setEndDate(endDate)),
  clearFilters: () => dispatch(clearFilters()),
  sortAscending: () => dispatch(sortAscending()),
  sortDescending: () => dispatch(sortDescending()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
