export const client = (endpoint: string) => {
  if (!endpoint) {
    throw new Error('Endpoint is required')
  }

  return window.fetch(`${process.env.REACT_APP_API_URL}${endpoint}`).then(r => r.json())
}
