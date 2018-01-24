import React from 'react';

const PrivacyPolicy = () => (
  <div className="content-container">
    <p>
      Authentication: Handled by <a href="https://firebase.google.com/">firebase</a>, no information
      stored.
    </p>
    <p>
      Expense data: stored inside of <a href="https://firebase.google.com/">firebase</a>
      {"'"}s realtime database
    </p>
  </div>
);

export default PrivacyPolicy;
