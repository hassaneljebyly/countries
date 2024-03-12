import Header from './components/Header';
import Form from './components/Form';
import CountriesList from './components/CountriesList';
import Details from './components/Details';

function App() {
  return (
    <>
      <Header />
      <main>
        <header className="controls-header">
          <Form />
        </header>
        <CountriesList />
        <Details />
      </main>
    </>
  );
}

export default App;
