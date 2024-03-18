import { Link, useLoaderData } from 'react-router-dom';
import BackButton from './../components/ui/BackButton';
import { getNativeName } from '../utilities/countries';
import placeHolderImage from '../assets/images/placeholder-image.webp';

export default function Details() {
  const {
    country: {
      region,
      name,
      population,
      subregion,
      capital,
      tld,
      currencies,
      languages,
      flags: { svg, alt },
      borders,
    },
  } = useLoaderData();
  const commonName = name.common;
  const nativeNames = getNativeName(name.nativeName);
  const populationToLocaleString = population
    ? population.toLocaleString()
    : 'unknown';
  const currency = currencies ? Object.entries(currencies)[0][0] : 'unknown';
  const usedLanguages = Object.values(languages || ['unknown']).join(', ');
  return (
    <div className="container">
      <div className="details">
        <div className="details__header">
          <BackButton />
        </div>
        <div className="details__column">
          <img
            className="details__image"
            src={svg || placeHolderImage}
            alt={alt || 'flag image unknown'}
            loading="lazy"
          />
        </div>
        <div className="details__column">
          <h2 className="details__country-name">{commonName || 'unknown'}</h2>
          <div className="details__info">
            <p>
              Native Names: <span>{nativeNames}</span>
            </p>
            <p>
              Population: <span>{populationToLocaleString}</span>
            </p>
            <p>
              Region: <span>{region || 'unknown'}</span>
            </p>
            <p>
              Sub Region: <span>{subregion || 'unknown'}</span>
            </p>
            <p>
              Capital: <span>{capital || 'unknown'}</span>
            </p>
            <p>
              Top Level Domain: <span>{tld ? tld[0] : 'unknown'}</span>
            </p>
            <p>
              Currencies: <span>{currency}</span>
            </p>
            <p>
              Languages: <span>{usedLanguages}</span>
            </p>
          </div>
          <ul className="details__border-countries-list">
            <li>
              Border Countries: <span>{borders.length != 0 || 'unknown'}</span>
            </li>
            {borders.length
              ? borders.map((country) => (
                  <li key={country.replace(' ', '_')}>
                    <Link
                      className="details__border-country"
                      to={`/countries/${country.replace(' ', '_')}`}
                    >
                      {country}
                    </Link>
                  </li>
                ))
              : ''}
          </ul>
        </div>
      </div>
    </div>
  );
}
