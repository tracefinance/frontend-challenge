type fetchJsonResponse<T> = {
  data: T | null
  error?: string
}

/**
 * Fetch JSON using the vanilla fetch API
 */
export const fetchJson = async <T>(
  url: RequestInfo,
  options: RequestInit = { method: 'GET', mode: 'cors' },
): Promise<fetchJsonResponse<T>> => {
  const headers = new Headers({ Accept: 'application/json' })

  // No need to add Content-Type header if there is no body
  if (options.body) {
    headers.append('Content-Type', 'application/json')
  }

  try {
    const resp = await fetch(url, { ...options, headers })
    const data = await resp.json()

    return {
      data,
    }
  } catch (error) {
    return {
      error: error.message || 'Error while fetching the url: ' + url,
      data: null,
    }
  }
}
