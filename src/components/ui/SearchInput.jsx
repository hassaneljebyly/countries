import useFormContext from './../../hooks/useFormContext';

export default function SearchInput() {
  const { searchInput, handleInputChange, handleClearSearchInput } =
    useFormContext();
  return (
    <>
      <label className="sr-only" htmlFor="search">
        search for country
      </label>
      <div className="form__search-input-container">
        <span className="form__search-input-icon"></span>
        <input
          className="form__search-input"
          id="search"
          type="search"
          value={searchInput}
          placeholder="Search for a country..."
          onChange={handleInputChange}
        />
        {searchInput.length != '' && (
          <span
            onClick={handleClearSearchInput}
            className="form__cancel-search-input-icon"
          ></span>
        )}
      </div>
    </>
  );
}
