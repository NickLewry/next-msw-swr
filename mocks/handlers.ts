import { rest } from 'msw'

export const handlers = [
  rest.get('https://api.punkapi.com/v2/beers', (_req, res, ctx) => {
    return res(
      ctx.json({
        title: 'Tasty',
      })
    )
  })
]
