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
      <link rel="shortcut icon" href="/icons/alien.png" type="image/x-icon" />
      <meta
        name="description"
        content="I'm a Front-End developer based in the beautiful Costa Rica. I build awesome pixel-perfect and high-performance websites."
      />
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
        I enjoy bringing ideas to life in the browser. I always commit to
        projects, since in each project, there is always something new to learn,
        and I love seeing how my creations help improve businesses and make
        other people&apos;s work easier.
      </p>
      <div>
        <Projects />
      </div>
    </Section>
  </>
)

export default Index
