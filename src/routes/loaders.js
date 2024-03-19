import { getCountries, getCountriesByName } from '../utilities/countries';

export async function countriesLoader() {
  try {
    let countries = await getCountries();
    return { countries };
  } catch (error) {
    throw Error('internal error');
  }
}

export async function CountryLoader({ params }) {
  try {
    const country = await getCountriesByName(params.countryId);
    return { country };
  } catch (error) {
    throw Error('internal error');
  }
}
