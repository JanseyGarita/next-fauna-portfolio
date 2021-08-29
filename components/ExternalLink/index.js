import { borders, colors, spacing } from '@/variables/global'
import Image from 'next/image'

const ExternalLink = ({ children: text, link }) => {
  return (
    <>
      <a
        href={link}
        data-color={colors.ternary}
        target="_blank"
        rel="noreferrer"
        style={{ borderRadius: borders.radius_md }}
      >
        <Image
          alt="External link icon"
          src="/icons/external-link.svg"
          height={20}
          width={20}
        />
        <span>{text}</span>
      </a>
      <style jsx>{`
        a {
          display: flex;
          padding: 0.12rem ${spacing.spacing04} ${spacing.spacing01} ${spacing.spacing04};
          width: fit-content;
        }

        span {
          color: ${colors.ternary};
          letter-spacing: 0.025rem;
          margin: 3px 0 0 ${spacing.spacing03};
        }
      `}</style>
    </>
  )
}

export default ExternalLink
