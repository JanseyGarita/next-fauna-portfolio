import { colors, spacing } from '@/variables/global'

const ExternalLink = ({ children: text, link }) => {
  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="animated-hover"
      >
        <span>{text}</span>
        <svg viewBox="0 0 11 5">
          <path
            d="M0.14084507,2.42857143 L9.64788732,2.5 M7.53521127,0 L10,2.5 L7.53521127,5"
            vectorEffect="non-scaling-stroke"
            fill="none"
            fillRule="evenodd"
            strokeLinecap="square"
          ></path>
        </svg>
      </a>
      <style jsx>{`
        a {
          border-bottom: 1px solid ${colors.ternary};
          display: flex;
          overflow: hidden;
          padding: ${spacing.spacing03} ${spacing.spacing05};
          position: relative;
          width: fit-content;
        }

        span {
          color: ${colors.ternary};
          font-family: sans-serif;
          letter-spacing: 0.035rem;
          transform: translateX(-13px);
        }

        svg {
          stroke: ${colors.ternary};
          stroke-width: 1.4;
          transform: translateX(13px);
          width: 1rem;
        }

        span,
        svg {
          transition: transform 0.3s ease;
        }
        a:hover span,
        a:hover svg {
          color: #fefefe;
          stroke: #fefefe;
          transform: translateX(2px);
        }

        a:hover span {
          transform: translateX(-2px);
        }
      `}</style>
    </>
  )
}

export default ExternalLink
