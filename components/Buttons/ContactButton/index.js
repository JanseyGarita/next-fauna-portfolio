import { colors } from '@/variables/global'

const ContactButton = () => {
  return (
    <>
      <a href="#contact-me">
        <div className="bg-container">
          <svg viewBox="0 0 118 124">
            <polygon
              points="62 0 98.443 11.841 120.966 42.841 120.966 81.159 98.443 112.159 62 124 25.557 112.159 3.034 81.159 3.034 42.841 25.557 11.841"
              transform="translate(-3)"
            ></polygon>
          </svg>
        </div>
        <div className="icon-container">
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </div>
      </a>
      <style jsx>{`
        a {
          height: 50px;
          position: fixed;
          right: 22px;
          top: 90%;
          width: 50px;
          z-index: 2;
        }

        .bg-container svg {
          transition: transform 0.3s ease;
          fill: ${colors.primary};
          width: 100%;
        }

        a:hover .bg-container svg {
          fill: ${colors.ternary};
          transform: scale(1.2) rotate(55deg);
        }

        .icon-container svg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-48%, -45%);
          stroke: #fefefe;
        }
      `}</style>
    </>
  )
}

export default ContactButton
