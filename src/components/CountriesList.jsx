import CountriesCard from './ui/CountriesCard';

export default function CountriesList() {
  const array = new Array(20).fill(null);
  console.log(array);
  return (
    <ul className="flex">
      {array.map((card, i) => (
        <CountriesCard key={i} />
      ))}
    </ul>
  );
}
