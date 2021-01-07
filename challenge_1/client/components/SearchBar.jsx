import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import SearchResults from './SearchResults.jsx';

const SearchBar = function() {

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentPageData, setCurrentPageData] = useState([]);
  const [keyword, setKeyword] = useState('');
  const [isActive, setIsActive] = useState(false);
  const PER_PAGE = 10;
  const pageCount = Math.ceil(data.length / PER_PAGE)

  useEffect(() => {
    const offset = currentPage * PER_PAGE;
    setIsActive(true);
    setCurrentPageData(data.slice(offset, offset + PER_PAGE))
  }, [currentPage, data]);

  function handleChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  function handleClick(event) {
    event.preventDefault();
    // make api call here
    axios.get(`/historyAPI/${keyword}`)
    .then((response) => {
      console.log('response: ', response)
      setData(response.data);
    })
    .catch((error) => {
      console.log('error: ', error);
    });
  }
  const handlePageClick = function(event) {
    // event.preventDefault();
    console.log('number: ', event.selected);
    setCurrentPage(event.selected);
  }

  return (
    <div>
      <form id='searchForm'>
        <input type='text' value={keyword} onChange={handleChange}   placeholder={keyword}/>
        <input type='submit' onClick={handleClick} value='Search'/>
      </form>
      {currentPageData.map((event) => {
        return (
          <SearchResults date={event.date} description={event.description}/>
        )
      })}
      <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
    </div>
  );
};

export default SearchBar;