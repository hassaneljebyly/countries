import { useEffect, useState } from 'react';
import useFormContext from './useFormContext';
import { getRegionsNames } from '../utilities/countries';
import {
  closeMenuAndFocus,
  focusNextOption,
  focusSelected,
} from '../utilities/selectMenuFunctions';

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
      focusSelected();
      setFilterExpanded(!filterExpanded);
    } else {
      selectOption(e);
    }
  }

  function handleKeyDown(e) {
    const isSelected = e.code && e.code === 'Enter';

    e.preventDefault();
    focusNextOption(e);
    closeMenuAndFocus(e.code, setFilterExpanded); // close menu on Escape or Tab just like html select tag

    if (isSelected) {
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
