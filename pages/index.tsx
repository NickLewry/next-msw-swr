import React from "react";
import {useFetchBeers} from './useFetchBeers';

export default function Home() {
  const { data } = useFetchBeers()
  return (
    <div>
      <h1>Hello</h1>
      <p>{data.title}</p>
    </div>
  )
}