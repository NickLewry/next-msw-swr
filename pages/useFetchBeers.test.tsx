import { renderHook } from "@testing-library/react-hooks";
import { server } from '../mocks/server';
import { useFetchBeers } from './useFetchBeers';

import {rest} from "msw"
import { cache } from 'swr';
import { Wrapper } from './TestWrapper';



describe("useFetchBeers", () => {
  it("should return a tasty beer", async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => useFetchBeers(),
      {wrapper: Wrapper}
    );

    server.printHandlers()

    expect(result.current.data).toBeUndefined();

    await waitForNextUpdate();

    expect(result.current.data).toEqual({title: "Tasty"})
  })

  it("should return a different beer", async () => {
    server.use(rest.get('https://api.punkapi.com/v2/beers', (_req, res, ctx) => {
      return res(
        ctx.json({
          title: 'WOW',
        })
      )
    }));

    console.log("values set in SWR cache", cache.keys())
    server.printHandlers()


    const { result, waitForNextUpdate } = renderHook(
      () => useFetchBeers(),
      {wrapper: Wrapper}
    );

    expect(result.current.data).toBeUndefined();

    await waitForNextUpdate();

    expect(result.current.data).toEqual({title: "WOW"})
  })
})