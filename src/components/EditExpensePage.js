import React from 'react';

const EditExpensePage = (props) => {
  console.log(props);
  return <div>edit page for id {props.match.params.id}</div>;
};

export default EditExpensePage;
