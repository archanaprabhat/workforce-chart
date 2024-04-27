import PropTypes from 'prop-types';

function Search({ inputSearch, setInputSearch }) {
  function handleSearch(e) {
     setInputSearch(e.target.value);
  }

    return (
        <div className='flex gap-2  mb-10 ml-8'>
            <div className='font-semibold text-gray-500'>Search</div>
            <input type="text" onChange={handleSearch} className='font-primary text-md h-9 border-2 rounded-md mt-[-6px] px-4 border-gray-200 shadow-md outline-none'  value={inputSearch}/>
        </div>
    );
}

Search.propTypes = {
  inputSearch: PropTypes.string.isRequired,
  setInputSearch: PropTypes.func.isRequired,
 };
 

export default Search;