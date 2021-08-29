import SectionTitle from 'components/SectionTitle'

const Section = ({ classNameWrapper, children, title, number }) => {

  return (
    <section className={classNameWrapper} id={title} data-title={title || ''}>
      {title && <SectionTitle number={number}>{title}</SectionTitle>}
      {children}
    </section>
  )
}

export default Section
