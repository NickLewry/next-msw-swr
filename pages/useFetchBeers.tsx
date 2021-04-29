import useSWR from 'swr';
import { fetcher } from '../http/fetcher';

export const useFetchBeers = () => {
  const { data, error } = useSWR('https://api.punkapi.com/v2/beers', fetcher);

  return {
    data,
    error,
  };
};