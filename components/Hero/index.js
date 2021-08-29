import { colors } from '@/variables/global'

const Hero = ({ children, title }) => {
  return (
    <>
      <header>
        <h1 className="w-100 text-center">{title}</h1>
        {children}
      </header>

      <style jsx>{`
        header {
          align-items: center;
          display: flex;
          flex-direction: column;
          height: 100vh;
          justify-content: center;
          position: relative;
        }

        header::before {
          background-color: ${colors.secondary};
          content: '';
          position: absolute;
          right: 0;
          top: 0;
          width: 50%;
          height: 100%;
          z-index: -1;
        }

        h1 {
          color: ${colors.primary};
          font: normal normal 600 clamp(48px, 20vw, 130px) /
              clamp(56px, 22vw, 150px) Times New Roman,
            serif;
        }
      `}</style>
    </>
  )
}

export default Hero
