import { useEffect, useState } from 'react';
import useFormContext from './useFormContext';
import { getRegionsNames } from '../utilities/countries';

export default function useSelectMenu() {
  const { handleSelectChange, selectInput } = useFormContext();
  const [filterExpanded, setFilterExpanded] = useState(false);
  const [selectedOption, setSelectedOption] = useState(selectInput);
  const [selectOptions, setSelectOptions] = useState([]);

  function selectOption(e) {
    // resets selection if same selection clicked twice
    const selectedOptionValue =
      e.target.getAttribute('data-value') === selectedOption
        ? ''
        : e.target.getAttribute('data-value');
    handleSelectChange(selectedOptionValue);
    setSelectedOption(selectedOptionValue);
    setFilterExpanded(!filterExpanded);
  }

  function handleClick(e) {
    const isButton = e.target.getAttribute('type') === 'button';
    if (isButton) {
      setFilterExpanded(!filterExpanded);
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

  useEffect(() => {
    getRegionsNames().then((data) => setSelectOptions(data));
  }, []);

  return {
    selectedOption,
    selectOptions,
    filterExpanded,
    handleClick,
    handleKeyDown,
  };
}
