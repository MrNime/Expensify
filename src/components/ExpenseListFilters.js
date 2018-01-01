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
    // eslint-disable-next-line
    e.target.value === 'date' ? this.props.sortByDate() : this.props.sortByAmount();
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
                  <path d="M336.2 274.5l-210.1 210h805.4c13 0 23 10 23 23s-10 23-23 23H126.1l210.1 210.1c11 11 11 21 0 32-5 5-10 7-16 7s-11-2-16-7l-249.1-249c-11-11-11-21 0-32l249.1-249.1c21-21.1 53 10.9 32 32z" />
                </svg>
              ) : (
                <svg
                  className="DayPickerNavigation_svg__horizontal DayPickerNavigation_svg__horizontal_1"
                  viewBox="0 0 1000 1000"
                >
                  <path d="M694.4 242.4l249.1 249.1c11 11 11 21 0 32L694.4 772.7c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210.1-210.1H67.1c-13 0-23-10-23-23s10-23 23-23h805.4L662.4 274.5c-21-21.1 11-53.1 32-32.1z" />
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
  setStartDate: startDate => dispatch(setStartDate(startDate)),
  setEndDate: endDate => dispatch(setEndDate(endDate)),
  clearFilters: () => dispatch(clearFilters()),
  sortAscending: () => dispatch(sortAscending()),
  sortDescending: () => dispatch(sortDescending()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
