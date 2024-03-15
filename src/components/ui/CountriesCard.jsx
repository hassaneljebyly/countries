import { Link } from 'react-router-dom';
import placeHolderImage from '../../assets/images/placeholder-image.webp';

export default function CountriesCard({
  name: { common },
  flags: { svg, alt },
  population,
  region,
  capital,
}) {
  const linkId = common.replace(' ', '_');
  return (
    <li className="country-card">
      <img
        className="country-card__image"
        src={svg || placeHolderImage}
        alt={alt || 'flag image unknown'}
      />
      <div className="country-card__body">
        <h2 className="country-card__name">{common || 'unknown'}</h2>
        <p className="country-card__info">
          population:{' '}
          <span>{population ? population.toLocaleString() : 'unknown'}</span>
        </p>
        <p className="country-card__info">
          region: <span>{region || 'unknown'}</span>
        </p>
        <p className="country-card__info">
          capital: <span>{capital || 'unknown'}</span>
        </p>
      </div>
      <Link to={`${linkId}`} className="country-card__link">
        <span className="sr-only">see more details</span>
      </Link>
    </li>
  );
}
