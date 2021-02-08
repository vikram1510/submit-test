import axios from 'axios';

const countriesUrl = 'https://restcountries.eu/rest/v2/alpha?codes=ind;gbr';

export type Country = {
  name: string,
  flag: string
}
export async function getMyCountries(callback?: (res: Country[]) => void): Promise<Country[]>{
  const res = await axios.get<Country[]>(countriesUrl);
  if (callback) callback(res.data);
  return res.data;
}
