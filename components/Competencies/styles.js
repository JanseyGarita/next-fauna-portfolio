import { borders, spacing } from '@/variables/global'
import css from 'styled-jsx/css'

export const competenciesStyles = css.global`
  .competencies-section {
    margin: 0 auto;
    max-width: 940px;
    width: 100%;
  }

  .competencies-container,
  .competencies-group,
  .competencies-item {
    align-items: center;
    flex: 0 0 100%;
    display: flex;
  }

  .competencies-container {
    flex-direction: column;
    margin: ${spacing.layout01} auto 0;
    max-width: 938px;
  }

  @media (min-width: 992px) {
    .competencies-container {
      flex-direction: row;
    }
  }

  .competencies-group {
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }

  .competencies-group + .competencies-group {
    margin: 20px 0 0;
  }

  @media (min-width: 992px) {
    .competencies-group {
      flex: 0 0 calc((100% - 88px) / 5);
      width: calc((100% - 88px) / 5);
    }

    .competencies-group + .competencies-group {
      margin: 0 0 0 22px;
    }
  }

  .competencies-item {
    background-color: #fff;
    border-radius: ${borders.radius_sm};
    box-shadow: 0 15px 30px 0 #d4d9e855;
    height: 100px;
    justify-content: center;
    transition: transform 0.3s ease-in;
    transform: translateZ(100px);
    width: 100%;
  }

  .competencies-item:not(:first-of-type) {
    display: none;
  }

  .nextjs {
    flex: 0 0 320px;
    height: 100px;
    width: 320px;
  }

  .drupal,
  .react {
    flex: 0 0 180px;
    height: 65px;
    width: 180px;
  }

  .vuejs,
  .svelte {
    flex: 0 0 260px;
    height: 80px;
    width: 260px;
  }

  .competencies-item + .competencies-item {
    margin: 25px 0 0;
  }

  @media (min-width: 992px) {
    .competencies-item:not(:first-of-type) {
      display: flex;
    }

    .competencies-item:first-of-type {
      flex: 0 0 100%;
      height: 100px;
      width: 100%;
    }
  }
`
