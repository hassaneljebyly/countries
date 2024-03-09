import SelectMenu from './SelectMenu';

export default function Form() {
  return (
    <form className="form">
      <label className="sr-only" htmlFor="search">
        search for country
      </label>
      <div className="form__search-input-container">
        <span className="form__search-input-icon"></span>
        <input
          className="form__search-input"
          id="search"
          type="search"
          placeholder="Search for a country..."
        />
        <span className="form__cancel-search-input-icon"></span>
      </div>
      <label className="sr-only" htmlFor="filter">
        filter by region
      </label>

      <SelectMenu />
    </form>
  );
}
