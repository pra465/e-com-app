import React from 'react';
import './NewArrivals.css';
const NewArrivals = () => {
  return (
    <div className="text-move-container">
      <div className="text-move">
        <span>
          {' '}
          New <span className="arrivals-text">Arrivals</span>
        </span>
        &nbsp;&nbsp; &nbsp;{' '}
      </div>
      <div className="text-move text-move2">
        <span>
          {' '}
          New <span className="arrivals-text">Arrivals</span>
        </span>
      </div>
    </div>
  );
};

export default NewArrivals;
