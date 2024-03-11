export default function CountriesCard() {
  return (
    <li className="country-card">
      <img
        className="country-card__image"
        src="https://flagcdn.com/de.svg"
        alt=""
      />
      <div className="country-card__body">
        <h2 className="country-card__name">Germany</h2>
        <p className="country-card__info">
          population: <span>81,770,900</span>
        </p>
        <p className="country-card__info">
          region: <span>europe</span>
        </p>
        <p className="country-card__info">
          capital: <span>berlin</span>
        </p>
      </div>
      <a href="#" className="country-card__link">
        <span className="sr-only">see more details</span>
      </a>
    </li>
  );
}
