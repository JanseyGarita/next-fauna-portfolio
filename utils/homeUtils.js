/**
 * Helper functions to process the chart data
 */

export const fetcher = async (repo, languages, options) => {
  let res = await fetch(repo.languages_url, options)
  let data = await res.json()
  languages = parseLanguages(data, languages)
  return { ...repo, languages: { ...data } }
}

const parseLanguages = (data, languages) => {
  Object.entries(data).forEach(([key, value]) => {
    let language = key.toUpperCase()
    if (language in languages) {
      languages[language] += value
    } else {
      languages[language] = value
    }
  })
}

export const setLanguagesValues = (languages) => {
  return Object.entries(languages).map(([name, { score: value }]) => ({
    name: name.toUpperCase(),
    value,
  }))
}

export const getHeaders = (token) => ({
  method: 'GET',
  headers: {
    Authorization: `token ${token}`,
    'Content-Type': 'application/json',
    Accept: 'application/vnd.github.v3+json',
  },
  referrerPolicy: 'no-referrer',
})
