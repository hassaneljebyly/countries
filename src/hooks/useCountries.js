import { useEffect, useState } from 'react';

export default function useCountries() {
  const [data, setData] = useState('hello');

  useEffect(() => {}, []);
  console.log(data);
}
