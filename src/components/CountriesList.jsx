import { useRouteLoaderData } from 'react-router-dom';
import CountriesCard from './ui/CountriesCard';
import { useContext } from 'react';
import { SomeContext } from './../App';

export default function CountriesList() {
  const { countries } = useRouteLoaderData('root');
  const { inputValue } = useContext(SomeContext);
  const filteredCountryList = countries.filter((country) => {
    if (country.name.common.toLowerCase().includes(inputValue.toLowerCase()))
      return country;
  });
  return (
    <div className="container">
      <ul className="grid">
        {filteredCountryList.map((country, i) => (
          <CountriesCard
            key={country.name ? country.name.common.replace(' ', '_') : i}
            {...country}
          />
        ))}
      </ul>
    </div>
  );
}
