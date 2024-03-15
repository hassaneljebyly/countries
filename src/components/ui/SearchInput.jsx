import { useContext } from 'react';
import { SomeContext } from '../../App';

export default function SearchInput() {
  const { inputValue, handleInputChange } = useContext(SomeContext);
  console.log(inputValue);
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
          value={inputValue}
          placeholder="Search for a country..."
          onChange={handleInputChange}
        />
        <span className="form__cancel-search-input-icon"></span>
      </div>
    </>
  );
}
