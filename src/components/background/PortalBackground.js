import { createGlobalStyle } from 'styled-components'

const PortalBackground = createGlobalStyle`
  @keyframes BGScroll{
    from{ background-position: 0px 0px; }
    to{ background-position: -200px -200px; }
  }

  body {
    background-image: url('/img/portalbg.png');
    animation: BGScroll 4s linear infinite;
  }
`

export default PortalBackground