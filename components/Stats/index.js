import Chart from 'components/Chart'
import ExternalLink from 'components/ExternalLink'

const Stats = (props) => {
  const { classNameWrapper, title, description, url, chartData } = props

  return (
    <div className={`row ${classNameWrapper || ''}`}>
      <div className="col-sm-12 col-md-6">
        <h3>{title}</h3>
        <p>{description}</p>
        <ExternalLink link={url}>Visit my profile</ExternalLink>
      </div>
      <div className="col-sm-12 col-md-6 d-flex align-items-center">
        <Chart {...chartData} />
      </div>
    </div>
  )
}

export default Stats
