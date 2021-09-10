import ExternalLink from '../Buttons/ExternalLink'

const ProjectModal = ({ id, handleClose, ...rest }) => {
  const { title, description, url } = rest

  return (
    <>
      <div
        aria-hidden="true"
        aria-labelledby={title}
        className={`modal align-items-end px-0`}
        id={id}
        role="dialog"
        tabIndex="-1"
      >
        <div className="modal-content px-3">
          <div className="modal-header py-4">
            <h4 className="mb-0">{title}</h4>
            <button type="button" aria-label="Close" onClick={handleClose}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body my-3">
            <p>{description}</p>
          </div>
          {url && (
            <div className="modal-footer p-4">
              <ExternalLink link={url}>Launch the site</ExternalLink>
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        .modal {
          align-items: center;
          background-color: #0000004d;
          display: flex !important;
          overflow: hidden;
        }

        .modal-content {
          animation: appear 0.3s ease forwards;
          border-radius: 0;
          border: 0;
        }

        button {
          background: none;
          border: 0;
        }

        button > span {
          font-size: 24px;
        }

        @keyframes appear {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
}

export default ProjectModal
