import { LoaderStyles } from './styles'

const Loader = () => (
  <>
    <div className="lds-ellipsis">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <style jsx>{LoaderStyles}</style>
  </>
)

export default Loader
