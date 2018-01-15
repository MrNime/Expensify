export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text,
});

export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
});

export const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});

export const sortByDescription = () => ({
  type: 'SORT_BY_DESCRIPTION',
});

export const sortByPaid = () => ({
  type: 'SORT_BY_PAID',
});

export const sortBySaved = () => ({
  type: 'SORT_BY_SAVED',
});

export const setStartDate = startDate => ({
  type: 'SET_START_DATE',
  startDate,
});

export const setEndDate = endDate => ({
  type: 'SET_END_DATE',
  endDate,
});

export const clearFilters = () => ({
  type: 'CLEAR_FILTERS',
});

export const sortAscending = () => ({
  type: 'SORT_ASCENDING',
});

export const sortDescending = () => ({
  type: 'SORT_DESCENDING',
});
