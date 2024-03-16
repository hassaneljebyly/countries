import { useState } from 'react';

export default function useForm() {
  const [searchInput, setSearchInput] = useState('');
  const [selectInput, setSelectInput] = useState('');

  function handleInputChange(e) {
    setSearchInput(e.target.value);
  }
  function handleSelectChange(selectedValue) {
    setSelectInput(selectedValue);
  }

  function handleClearSearchInput() {
    setSearchInput('');
  }

  return {
    searchInput,
    selectInput,
    handleInputChange,
    handleSelectChange,
    handleClearSearchInput,
  };
}
