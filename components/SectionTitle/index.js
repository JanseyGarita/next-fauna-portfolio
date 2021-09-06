const SectionTitle = ({ children: text, number }) => (
  <>
    <div className="title-container">
      {number && <p>-{number}-</p>}
      <h2 className="formatted-text">{text}</h2>
    </div>
    <style jsx>{`
      .title-container {
        padding-bottom: 2rem;
      }

      h2 {
        margin-bottom: 0;
      }

      p {
        font-family: monospace;
        margin-bottom: 2rem;
      }
    `}</style>
  </>
)

export default SectionTitle
