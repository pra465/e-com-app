import React from 'react';

const Filter = ({ handleCheckboxChange, selectedGender }) => {
  return (
    <div className="">
      <input
        type="checkbox"
        id="male"
        checked={selectedGender.includes('Men')}
        onChange={() => handleCheckboxChange('Men')}
      />
      <label for="male">Male</label>
      <input
        type="checkbox"
        id="female"
        checked={selectedGender.includes('Women')}
        onChange={() => handleCheckboxChange('Women')}
      />
      <label for="female">Female</label>
    </div>
  );
};

export default Filter;
