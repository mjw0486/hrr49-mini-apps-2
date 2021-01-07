import React from 'react';

const SearchResults = function({date, description}) {
  return (
    <div className='event'>
      <div className='date'>
        {date}
      </div>
      <div className='description'>
        {description}
      </div>
    </div>
  );
};

export default SearchResults;