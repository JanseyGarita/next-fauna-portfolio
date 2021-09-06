import about from 'content/about'
import Competencies from 'components/Competencies'
import Head from 'next/head'
import Hero from 'components/Hero'
import Section from 'components/Section'
import Projects from '@/components/Projects'

const Index = () => (
  <>
    <Head>
      <title>Jansey Garita - Front-End Developer</title>
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
    <Section classNameWrapper="scrollspy" title="What I do" number="03">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quam
        facere possimus, iusto ex nam error soluta nisi dicta aut perferendis,
        quod non quis harum?
      </p>
      <div>
        <Projects />
      </div>
    </Section>
  </>
)

export default Index
