import Header from './components/Header';
import Form from './components/Form';
import CountriesList from './components/CountriesList';

function App() {
  return (
    <>
      <Header />
      <main>
        <header className="controls-header">
          <div className="container">
            <Form />
          </div>
        </header>
        <div className="container">
          <CountriesList />
        </div>
      </main>
    </>
  );
}

export default App;
