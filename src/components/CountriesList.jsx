import { useRouteLoaderData } from 'react-router-dom';
import CountriesCard from './ui/CountriesCard';
import useFormContext from './../hooks/useFormContext';

export default function CountriesList() {
  const { countries } = useRouteLoaderData('root');
  const { searchInput, selectInput } = useFormContext();
  const filteredCountryList = countries.filter((country) => {
    if (
      (selectInput === '' || selectInput === country.region.toLowerCase()) &&
      country.name.common.toLowerCase().includes(searchInput.toLowerCase())
    )
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
