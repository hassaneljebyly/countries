import { useRouteLoaderData } from 'react-router-dom';
import CountriesCard from './ui/CountriesCard';

export default function CountriesList() {
  const { countries } = useRouteLoaderData('root');
  return (
    <div className="container">
      <ul className="flex">
        {countries.map((country, i) => (
          <CountriesCard key={i} {...country} />
        ))}
      </ul>
    </div>
  );
}
