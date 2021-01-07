import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Search = function({data, setData}) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleChange = function(event) {
    event.preventDefault();
    if (event.target.id === 'start-date') {
      setStartDate(event.target.value);
    }
    if (event.target.id === 'end-date') {
      setEndDate(event.target.value);
    }
  }

  const handleClick = function(event) {
    event.preventDefault();
    axios.get(`/bitcoinApi/${startDate}/${endDate}`)
    .then((response) => {
      console.log(response.data);
      setData(response.data);
    })
    .catch((err) => {
      console.log('error: ', err);
    })
    setStartDate('');
    setEndDate('');
  }

  return (
    <div>
      <h1>Search</h1>
      <form className='search-form'>
        <input id='start-date' onChange={handleChange} type='text' placeholder='Start Date' value={startDate}/>
        <input id='end-date' onChange={handleChange} type='text' placeholder='End Date' value={endDate}/>
        <button type='submit' onClick={handleClick}>Search</button>
      </form>
    </div>
  );
};

export default Search;