import { FormContext } from './FormContext';
import useForm from '../hooks/useForm';

export default function FormContextProvider({ children }) {
  return (
    <FormContext.Provider value={useForm()}>{children}</FormContext.Provider>
  );
}
