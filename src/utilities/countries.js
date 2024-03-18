import { API_BASE_URL, FIELDS } from './variables';

export async function getCountries() {
  try {
    let countries = localStorage.getItem('countries');
    if (countries) {
      countries = JSON.parse(countries);
      return countries;
    } else {
      const response = await fetch(`${API_BASE_URL}all?${FIELDS}`);
      const countries = await response.json();
      localStorage.setItem('countries', JSON.stringify(countries));
      return countries;
    }
  } catch (error) {
    throw Error(error);
  }
}
/**
 * @param  {String} countryName
 */
export async function getCountriesByName(countryName) {
  try {
    let countries = localStorage.getItem('countries');
    let country;

    if (countries) {
      country = JSON.parse(countries).filter(
        (country) => country.name.common === countryName.replace('_', ' ')
      )[0];
    } else {
      const response = await fetch(
        `${API_BASE_URL}name/${countryName.replace('_', '%20')}?${FIELDS}`
      );
      const data = await response.json();
      country = data[0];
    }

    const borderCountriesNames = await getCountryBorders(country.borders);
    country.borders = borderCountriesNames;
    return country;
  } catch (error) {
    throw Error(error);
  }
}
/**
 * @param  {Array.<string>} bordersList
 * @return {Array.<string>} borderCountriesNames
 */
export async function getCountryBorders(bordersList) {
  try {
    const response = await fetch(
      `${API_BASE_URL}alpha?codes=${bordersList.join(',')}&fields=name`
    );
    const borderCountries = await response.json();
    const borderCountriesNames = bordersList.length
      ? borderCountries.map((country) => {
          return country.name.common;
        })
      : [];
    return borderCountriesNames;
  } catch (error) {
    throw Error(error);
  }
}
/**
 * @param  {{language:{official: String, common: String}}} nativeName
 * @returns String
 */
export function getNativeName(nativeName) {
  if (!nativeName) return 'unknown';
  const nativeNames = [];
  for (const [, value] of Object.entries(nativeName)) {
    nativeNames.push(value.official);
  }
  return nativeNames.join(', ');
}

/**
 * @returns {Array.<String>} filterOptions
 */
export async function getRegionsNames() {
  let filterOptions;
  try {
    if (!localStorage.getItem('regions')) {
      const response = await fetch(`${API_BASE_URL}all?fields=region`);
      const data = await response.json();
      const regions = new Set(
        data.map(({ region }) => {
          return region.toLowerCase();
        })
      );
      filterOptions = Array.from(regions);
      localStorage.setItem('regions', filterOptions);
    } else {
      filterOptions = localStorage.getItem('regions').split(',');
    }

    return filterOptions;
  } catch (error) {
    throw Error(error);
  }
}
