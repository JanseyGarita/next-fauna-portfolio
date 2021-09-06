import SectionTitle from 'components/SectionTitle'

const Section = ({ classNameWrapper, children, title, number }) => (
  <section
    className={classNameWrapper}
    id={title.toLowerCase().replace(/ /g, "-")}
    data-title={title || ''}
  >
    {title && <SectionTitle number={number}>{title}</SectionTitle>}
    {children}
  </section>
)

export default Section
