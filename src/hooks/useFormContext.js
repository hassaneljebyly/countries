import { useContext } from 'react';
import { FormContext } from './../context/FormContext';

export default function useFormContext() {
  return useContext(FormContext);
}
