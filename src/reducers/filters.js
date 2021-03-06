import moment from 'moment';

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  sortDirection: 'descending',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month'),
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text,
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount',
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date',
      };
    case 'SORT_BY_DESCRIPTION':
      return {
        ...state,
        sortBy: 'description',
      };
    case 'SORT_BY_PAID':
      return {
        ...state,
        sortBy: 'paid',
      };
    case 'SORT_BY_SAVED':
      return {
        ...state,
        sortBy: 'saved',
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate,
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate,
      };
    case 'CLEAR_FILTERS':
      return {
        ...filtersReducerDefaultState,
        startDate: null,
        endDate: null,
      };
    case 'SORT_ASCENDING':
      return {
        ...state,
        sortDirection: 'ascending',
      };
    case 'SORT_DESCENDING':
      return {
        ...state,
        sortDirection: 'descending',
      };
    default: {
      return state;
    }
  }
};
