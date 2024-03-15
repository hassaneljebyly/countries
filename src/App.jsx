import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './routes/root';
import Details from './routes/details';
import Home from './routes/home';
import { CountryLoader, countriesLoader } from './routes/loaders';
import { createContext, useState } from 'react';

const router = createBrowserRouter([
  {
    path: '/countries/',
    element: <Root />,
    id: 'root',
    loader: countriesLoader,
    children: [
      { index: true, element: <Home /> },
      {
        path: ':countryId',
        element: <Details />,
        loader: CountryLoader,
        errorElement: <p>error not found</p>,
      },
    ],
  },
]);

export const SomeContext = createContext({
  inputValue: '',
  regionSelected: '',
});

function App() {
  const [input, setInput] = useState('');
  function handleInputChange(e) {
    setInput(e.target.value);
    console.log(input);
  }
  return (
    <>
      <SomeContext.Provider
        value={{ inputValue: input, regionSelected: '', handleInputChange }}
      >
        <RouterProvider router={router} />
      </SomeContext.Provider>
    </>
  );
}

export default App;
