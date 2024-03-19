import useSelectMenu from './../../hooks/useSelectMenu';

export default function SelectMenu() {
  const {
    selectedOption,
    filterExpanded,
    selectOptions,
    handleClick,
    handleKeyDown,
  } = useSelectMenu();
  return (
    <div aria-label="filter" className="select-menu">
      <button
        className="select-menu__button"
        type="button"
        aria-expanded={filterExpanded}
        aria-controls="filter-menu"
        onClick={handleClick}
      >
        {selectedOption === '' ? 'Filter by Region' : selectedOption}
        <span
          className="select-menu__icon invertIcon"
          style={{
            rotate: filterExpanded && '180deg',
          }}
        ></span>
      </button>
      <ul id="filter-menu" role="select" className="select-menu__option-group">
        {selectOptions.map((option) => (
          <li
            key={option}
            className="select-menu__options"
            role="option"
            tabIndex={filterExpanded ? '0' : '-1'}
            data-value={option}
            aria-selected={selectedOption === option}
            onKeyDown={handleKeyDown}
            onClick={handleClick}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}
