import Header from './components/Header';
import Form from './components/Form';

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
      </main>
    </>
  );
}

export default App;
