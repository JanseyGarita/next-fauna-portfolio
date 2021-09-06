import css from 'styled-jsx/css'
import { colors } from '@/variables/global'

export const LoaderStyles = css`
  .lds-ellipsis {
    display: inline-block;
    height: 26px;
    position: relative;
    width: 80px;
  }

  .lds-ellipsis span {
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
    background: ${colors.ternary};
    border-radius: 50%;
    height: 10px;
    position: absolute;
    top: 45%;
    width: 10px;
  }

  .lds-ellipsis span:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }

  .lds-ellipsis span:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }

  .lds-ellipsis span:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }

  .lds-ellipsis span:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }

  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }

  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
`
