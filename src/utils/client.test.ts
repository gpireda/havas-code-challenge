import { client } from './client'

const expectedResponse = { foo: 'bar' }

beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(expectedResponse),
    }),
  )
})

it('returns expected response as json', async () => {
  const response = await client('/mock')
  expect(response).toEqual(expectedResponse)
})

it('throws if no endpoint is present when called', async () => {
  try {
    client()
  } catch (error) {
    expect(error.message).toEqual('Endpoint is required')
  }
})
