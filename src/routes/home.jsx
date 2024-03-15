import CountriesList from '../components/CountriesList';
import FormInput from '../components/FormInput';

export default function Home() {
  return (
    <>
      <header className="controls-header">
        <FormInput />
      </header>
      <CountriesList />
    </>
  );
}
