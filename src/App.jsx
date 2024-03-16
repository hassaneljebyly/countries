import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './routes/root';
import Details from './routes/details';
import Home from './routes/home';
import { CountryLoader, countriesLoader } from './routes/loaders';
import FormContextProvider from './context/FormContextProvider';

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

function App() {
  return (
    <>
      <FormContextProvider>
        <RouterProvider router={router} />
      </FormContextProvider>
    </>
  );
}

export default App;
