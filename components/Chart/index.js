import useWindowSize from 'hooks/useWindowSize'
import { useEffect, useRef } from 'react'
import { appendBars, createSVG, setGradient, sortData } from './chartUtils'

const Chart = ({ languages, idKey }) => {
  const graphRef = useRef()
  const id = useRef('graphic' + idKey)

  const { width: screenWidth } = useWindowSize()

  useEffect(() => {
    setTimeout(() => {
      const width = graphRef.current.offsetWidth
      graphRef.current.innerHTML = ''
      const data = sortData(languages)
      const svg = createSVG('#' + id.current, data.length, width)
      setGradient(svg)
      appendBars(svg, data)
    }, 0)
  }, [languages, screenWidth])

  return (
    <>
      <div id={id.current} className="graph-container" ref={graphRef}></div>
      <style jsx global>{`
        .graph-container {
          width: 100%;
        }

        .bar {
          fill: #5f89ad;
        }

        .axis {
          font-size: 13px;
        }

        .axis path,
        .axis line {
          fill: none;
          display: none;
        }

        .label {
          font-size: 14px;
        }
      `}</style>
    </>
  )
}

export default Chart
