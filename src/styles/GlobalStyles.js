import { createGlobalStyle } from 'styled-components';
import '@fontsource-variable/inter';

const GlobalStyles = createGlobalStyle`
:root {


  --lila-hell: #CEB7FF;
  --lila-footer: #433167;
  --lila-modal:#9e80dd;
  --lila-mittel: #8d71c9;
  --lila-bg: #110f15;
  --lila-button-bg: #231e30;
--gelb-button-bg: #242224;
--gelb-button-text: #FFF5D1;

  --lila-icon: #7E62B9;
  --lila-modal-bg: rgba(32, 26, 46, 0.937);

  --gelb-button-border:  #B7AE80;

  --shadow-btn: 0px 4px 27px 0px rgba(206,183,255,0.3);
  --shadow-btn-gelb: 0px 4px 27px 0px rgba(255, 245, 209, 0.16);

  --shadow: 0px 4px 27px 0px rgba(206,183,255,0.4);
  --shadow-light: 0px 4px 27px 0px rgba(206, 183, 255, 0.5);
  --shadow-dark: 0px 4px 27px 0px  #110f15ff;
  --shadow-small: 0px 4px 10px 0px rgba(206,183,255,0.4);
  
  --size-xs: 16px;
  --size-s: 18px;
  --size-m: 20px;
  --size-l: 22px;
  --size-xl:  24px;
  --size-xxl: 26px;
 
}


*{
  color: var(--lila-hell);
  -moz-hyphens: auto;
  -o-hyphens: auto ;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
}

*,
*::before,
*::after{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
::-webkit-scrollbar {
 display: none;
}



body {
  font-family: 'Inter Variable', serif;
  font-weight: 500;
  transition: opacity 5000ms ease-in-out;
  min-height: 100vh;
  line-height: 1.3;
  margin: 0;
  background-color: var(--lila-bg);
}


.range {
  -webkit-appearance: none;
  appearance: none; 
  width: 100%;
  cursor: pointer;
  outline: none;
  border-radius: 16px;
  accent-color: var(--lila-mittel);
}

.range::-webkit-slider-runnable-track {
  height: 5px;
  border-radius: 5px;
}

.range::-moz-range-track {
  height: 5px;
  background: var(--lila-hell);
  border-radius: 5px;
}

.range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  height: 15px;
  width: 15px;
  background-color: var(--lila-mittel);
  border-radius: 50%;
  margin-top: -5px;
}

.range::-moz-range-thumb {
  border: none;
  height: 30px;
  width: 30px;
  background-color: var(--lila-mittel);
  border-radius: 50%;
  margin-top: -5px;
}


h1 {
  text-align: center;
}

h2 {
  text-align: center;
}

h3 {
 font-size: var(--size-xl);
 font-weight: 700;
 margin:0;
}

h4 {
  font-size: var(--size-m);
  margin:0;
}
h5 {
  font-size: var(--size-s);
  margin:0;
}

p{
  color: var(--lila-mittel);
  font-size: var(--size-xs);
}


button {
  cursor: pointer
}
*:disabled {
  cursor: not-allowed;
}
ul {
  list-style: none;
  margin-bottom: 30px;
}

li {
  color: var(--lila-mittel);
  margin-bottom: 10px;
}
img {
  max-width: 100%
}

i {
  font-size: 0.9rem;
  color: var(--lila-icon)
}

@keyframes fade {
 0% {opacity: 1}
100% {opacity: 0}
  }

  @keyframes rotate {
  to {
    transform: rotate(1turn)
  }}

`;

export default GlobalStyles;
