import { fetcher, getHeaders, setLanguagesValues } from 'utils/homeUtils'
import { useState } from 'react'
import about from 'content/about'
import Competencies from 'components/Competencies'
import Head from 'next/head'
import Hero from 'components/Hero'
import Section from 'components/Section'
import Stats from 'components/Stats'
import stats from 'content/stats'

const getLanguagesArray = (data) => {
  return Object.entries(data).map(([name, value]) => ({ name, value }))
}

const Index = ({ ghData, cwData }) => {
  const [ghLanguages] = useState(getLanguagesArray(ghData))

  return (
    <>
      <Head>
        <title>Home | Jansey Garita - Front-End Developer</title>
      </Head>
      <Hero title="Jansey Garita">
        <p className="text-center formatted-text">Front-End Developer</p>
      </Hero>
      <Section
        classNameWrapper="border-top-0 scrollspy"
        title="About me"
        number="01"
      >
        <div className="row">
          <div className="col-sm-12 col-md-11">
            <p>{about.description}</p>
          </div>
        </div>
      </Section>
      <Section classNameWrapper="scrollspy" title="Competencies" number="02">
        <Competencies />
      </Section>
      <Section
        classNameWrapper="border-top-0 scrollspy"
        title={stats.title}
        number="03"
      >
        <div className="col-md-11">
          <p>{stats.description}</p>
        </div>
        <section className="border-top-0">
          <Stats
            chartData={{ languages: cwData, idKey: 'cw-stats' }}
            classNameWrapper="pb-4"
            description={stats.data.codewars.description}
            title="Codewars"
            url={stats.data.codewars.url}
          />
          <hr />
          <Stats
            chartData={{ languages: ghLanguages, idKey: 'gh-stats' }}
            classNameWrapper="pt-4"
            description={stats.data.github.description}
            title="Github"
            url={stats.data.github.url}
          />
        </section>
      </Section>
    </>
  )
}

export const getStaticProps = async () => {
  let options = getHeaders(process.env.GITHUB_TOKEN)
  /**
   * Github data
   */
  let ghRes = await fetch(process.env.GITHUB_REPOS_URL, options)
  let ghData = await ghRes.json()
  let ghLanguages = {}
  let repos = ghData.items.map((repo) => fetcher(repo, ghLanguages, options))

  /**
   * Codewars data
   */
  let cwRes = await fetch(process.env.CODEWARS_STATS_URL)
  let cwData = await cwRes.json()
  let { languages: cwLanguages, overall } = cwData.ranks
  let cwParsedData = setLanguagesValues(cwLanguages, overall.score)

  return {
    props: {
      repos: await Promise.all(repos), // Wait until all GitHub repos are processed since they require an extra fetch to get the languages
      ghData: ghLanguages,
      cwData: cwParsedData,
    },
  }
}

export default Index
