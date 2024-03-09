import { useState } from 'react';

const options = ['africa', 'america', 'asia', 'europe', 'oceania'];

export default function SelectMenu() {
  const [filterExpand, setFilterExpand] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Filter by Region');

  function selectOption(e) {
    const selectedOptionValue = e.target.getAttribute('data-value');
    setSelectedOption(selectedOptionValue);
    setFilterExpand(!filterExpand);
  }

  function handleClick(e) {
    const isButton = e.target.getAttribute('type') === 'button';
    if (isButton) {
      setFilterExpand(!filterExpand);
    } else {
      selectOption(e);
    }
  }

  function handleKeyDown(e) {
    const isSelected = (e.code && e.code === 'Enter') || e.code === 'Space';
    if (isSelected) {
      e.preventDefault(); // prevent Space bar scroll
      selectOption(e);
    }
  }
  return (
    <div aria-label="filter" className="select-menu">
      <button
        className="select-menu__button"
        type="button"
        aria-expanded={filterExpand}
        aria-controls="filter-menu"
        onClick={handleClick}
      >
        {selectedOption}
        <span
          className="select-menu__icon"
          style={{
            rotate: filterExpand && '180deg',
          }}
        ></span>
      </button>
      <ul id="filter-menu" role="select" className="select-menu__option-group">
        {options.map((option) => (
          <li
            key={option}
            className="select-menu__options"
            role="option"
            tabIndex={filterExpand ? '0' : '-1'}
            data-value={option}
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
