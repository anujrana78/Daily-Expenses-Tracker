import React, { useState } from 'react';

import './expensesFilter.css';

const ExpensesFilter = (props) => {
    
    const filterHandler = (e) => {
        props.onSaveFilter(e.target.value)
    }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected }onChange={filterHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;