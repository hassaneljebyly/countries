import BackButton from './ui/BackButton';

export default function Details() {
  return (
    <div className="container">
      <div className="details">
        <div className="details__header">
          <BackButton />
        </div>
        <div className="details__column">
          <img
            className="details__image"
            src="https://flagcdn.com/de.svg"
            alt=""
          />
        </div>
        <div className="details__column">
          <h2 className="details__country-name">Belgium</h2>
          <div className="details__info">
            <p>
              Native Name: <span>Belgié</span>
            </p>
            <p>
              Population: <span>11.319.511</span>
            </p>
            <p>
              Region: <span>Europe</span>
            </p>
            <p>
              Sub Region: <span>Western Europe</span>
            </p>
            <p>
              Capital: <span>Brussels</span>
            </p>
            <p>
              Top Level Domain: <span>.be</span>
            </p>
            <p>
              Currencies: <span>Euro</span>
            </p>
            <p>
              Languages: <span>Dutch, French. German </span>
            </p>
          </div>
          <ul className="details__border-countries-list">
            <li>Border Countries:</li>
            <li>
              <a className="details__border-country" href="#">
                France
              </a>
            </li>
            <li>
              <a className="details__border-country" href="#">
                Germany
              </a>
            </li>
            <li>
              <a className="details__border-country" href="#">
                Netherlands
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
