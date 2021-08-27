import { breakpoints, colors, spacing } from '@/variables/global'
import css from 'styled-jsx/css'

export const navbarStyles = css.global`
  .navbar-menu {
    height: 100vh;
    left: 0;
    position: fixed;
    transition: backdrop-filter 0.3s ease;
    width: 100%;
    width: 100%;
    will-change: backdrop-filter;
    z-index: 1;
  }

  .navbar-menu.blur {
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    background: #ffffff26;
    border-radius: 10px;
    border: 1px solid #ffffff2e;
  }

  .navbar-menu::before {
    background: #eee;
    content: '';
    height: 100%;
    position: absolute;
    transform: translateX(100%);
    transition: transform 0.4s 0.3s ease-out;
    width: 100%;
    will-change: transform;
  }

  .navbar-menu.open::before {
    transform: translateX(0);
    transition: transform 0.3s ease-in;
  }

  .navbar-menu ul {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    margin-bottom: 0;
    margin: 0;
    opacity: 0;
    padding: ${spacing.spacing07} 0;
    position: fixed;
    text-align: center;
    transition: all 0.3s ease-out;
    visibility: hidden;
    width: 100%;
  }

  .navbar-menu.open ul {
    opacity: 1;
    transition: opacity 0.2s 0.3s ease-in;
    visibility: visible;
  }

  @media (min-width: ${breakpoints.desktop_sm}) {
    .navbar-menu:not(.open) {
      height: fit-content;
    }
  }

  @media (min-width: ${breakpoints.desktop_sm}) {
    .navbar-menu ul {
      flex-direction: row;
      height: fit-content;
      opacity: 1;
      position: relative;
      visibility: visible;
    }
  }

  .navbar-menu.blur ul {
    padding: ${spacing.spacing05} 0;
  }

  .navbar-toggle {
    background-color: #fff;
    border: none;
    box-shadow: 0 2px 6px 0 #eee;
    display: flex;
    flex-direction: column;
    padding: ${spacing.spacing05};
    position: absolute;
    right: 25px;
    top: 8px;
    z-index: 1;
  }

  .navbar-toggle > span {
    background-color: ${colors.primary};
    height: 2px;
    margin: 2px 0;
    position: relative;
    transition: transform 0.2s linear;
    width: 20px;
  }

  .navbar-toggle > span:first-of-type {
    width: 10px;
  }

  .navbar-menu.open .navbar-toggle > span:first-of-type {
    opacity: 0;
  }

  .navbar-menu.open .navbar-toggle > span:last-of-type {
    transform: rotate(45deg) translate(-4px, -4px);
  }

  .navbar-menu.open .navbar-toggle > span:nth-of-type(2) {
    transform: rotate(-45deg);
  }
`

export const navlinkStyles = css`
  li {
    margin: ${spacing.spacing04} ${spacing.spacing07};
  }

  @media (min-width: ${breakpoints.desktop_sm}) {
    li {
      margin: ${spacing.spacing02} ${spacing.spacing07};
    }
  }

  a {
    color: ${colors.primary};
    font-family: sans-serif;
    letter-spacing: 0.055rem;
    opacity: 0.8;
    transition: opacity 0.3s ease-in-out;
    text-transform: uppercase;
    z-index: 1;
  }

  li.active a,
  a.active {
    font-weight: 600;
  }

  li.active a,
  a.active,
  a:hover {
    opacity: 1;
  }

  a.active {
    pointer-events: none;
  }
`
