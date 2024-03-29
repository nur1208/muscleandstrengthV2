import styled, { createGlobalStyle } from "styled-components";
export const GridX = styled.div`
  .grid-x {
    display: flex;
    flex-flow: row wrap;
  }
  .text-right {
    text-align: right;
  }
  .cell {
    flex: 0 0 auto;

    min-height: 0;
    min-width: 0;
    width: 100%;
    flex-basis: auto;
  }
  .small-3 {
    width: 25%;
  }

  .grid-x > .small-3 {
    width: 25%;
  }
  .small-4 {
    width: 33.3333333333%;
  }
  .grid-x > .small-4 {
    width: 33.3333333333%;
  }

  .small-6 {
    width: 50%;
  }

  .grid-x > .small-6 {
    width: 50%;
  }
  .grid-x > .small-12 {
    width: 100%;
  }

  .grid-margin-x > .cell {
    width: calc(100% - 0.625rem);
  }

  .grid-margin-x > .small-12 {
    width: calc(100% - 0.625rem);
  }

  .text-center {
    text-align: center;
  }

  .grid-margin-y {
    margin-top: -0.5555555556rem;
    margin-bottom: -0.5555555556rem;
  }

  .grid-margin-y > .cell {
    height: calc(100% - 1.1111111111rem);
    margin-top: 0.5555555556rem;
    margin-bottom: 0.5555555556rem;
  }
  .grid-margin-y:not(.grid-y) > .cell {
    height: auto;
  }

  .small-up-2 > .cell {
    width: 50%;
  }
  .grid-margin-x.small-up-2 > .cell {
    width: calc(50% - 1.1111111111rem);
  }

  .cell.shrink {
    flex: 0 0 auto;
  }

  .grid-x > .auto,
  .grid-x > .shrink {
    width: auto;
  }
  .cell.auto {
    flex: 1 1 0px;
  }

  @media print, screen and (min-width: 37.5em) {
    .grid-x > .bp600-4 {
      width: 33.3333333333%;
    }
    .grid-margin-x > .bp600-4 {
      width: calc(33.3333333333% - 0.625rem);
    }

    .bp600-up-3 > .cell {
      width: 33.3333333333%;
    }
    .grid-margin-x.bp600-up-3 > .cell {
      width: calc(33.3333333333% - 1.1111111111rem);
    }

    .bp600-6 {
      width: 50%;
    }

    .grid-x > .bp600-6 {
      width: 50%;
    }

    .grid-margin-x > .bp600-6 {
      width: calc(50% - 1.1111111111rem);
    }

    .grid-margin-y > .bp600-6 {
      height: calc(50% - 1.1111111111rem);
    }

    .bp600-8 {
      width: 66.6666666667%;
    }

    .grid-x > .bp600-8 {
      width: 66.6666666667%;
    }
    .grid-margin-x > .bp600-8 {
      width: calc(66.6666666667% - 1.1111111111rem);
    }

    .grid-x > .bp600-shrink {
      width: auto;
    }

    .grid-x > .bp600-auto {
      flex: 1 1 0px;
      width: auto;
    }
    .grid-x > .bp600-6 {
      flex: 0 0 auto;
    }

    .bp600-offset-4 {
      margin-left: 33.3333333333%;
    }
    .bp600-offset-6 {
      margin-left: 50%;
    }
  }

  @media print, screen and (min-width: 52.5em) {
    .grid-margin-x > .cell {
      width: calc(100% - 0.9375rem);
    }

    .grid-margin-x > .small-12 {
      width: calc(100% - 0.9375rem);
    }

    .grid-margin-x > .bp600-4 {
      width: calc(33.3333333333% - 0.9375rem);
    }

    .grid-margin-y {
      margin-top: -0.8333333333rem;
      margin-bottom: -0.8333333333rem;
    }

    .grid-margin-y > .cell {
      height: calc(100% - 1.6666666667rem);
      margin-top: 0.8333333333rem;
      margin-bottom: 0.8333333333rem;
    }

    .grid-margin-x.small-up-2 > .cell {
      width: calc(50% - 1.6666666667rem);
    }

    .medium-up-2 > .cell {
      width: 50%;
    }
    .grid-margin-x.medium-up-2 > .cell {
      width: calc(50% - 1.6666666667rem);
    }

    .grid-margin-x.medium-up-4 > .cell {
      width: calc(25% - 1.6666666667rem);
    }

    .grid-margin-x > .bp600-6 {
      width: calc(50% - 1.6666666667rem);
    }

    .grid-margin-y > .bp600-6 {
      height: calc(50% - 1.6666666667rem);
    }

    .grid-margin-x > .bp600-8 {
      width: calc(66.6666666667% - 1.6666666667rem);
    }
  }

  @media print, screen and (min-width: 60em) {
    .grid-x > .bp960-3 {
      width: 25%;
    }

    .grid-margin-x > .bp960-3 {
      width: calc(25% - 0.9375rem);
    }

    .bp960-4 {
      width: 33.3333333333%;
    }
    .grid-x > .bp960-4 {
      width: 33.3333333333%;
    }
    .grid-margin-x > .bp960-4 {
      width: calc(33.3333333333% - 1.6666666667rem);
    }
    .bp960-6 {
      width: 50%;
    }

    .grid-x > .bp960-6 {
      width: 50%;
    }
    .grid-margin-x > .bp960-6 {
      width: calc(50% - 1.6666666667rem);
    }
  }

  @media print, screen and (min-width: 64em) {
    .large-4 {
      width: 33.3333333333%;
    }

    .grid-x > .large-4 {
      width: 33.3333333333%;
    }
    .grid-margin-x > .large-4 {
      width: calc(33.3333333333% - 1.6666666667rem);
    }
  }

  @media screen and (min-width: 80em) {
    .grid-x > .bp1280-3 {
      width: 25%;
    }

    .grid-margin-x > .bp1280-3 {
      width: calc(25% - 0.9375rem);
    }
  }
`;
const GlobalStyle = createGlobalStyle`

html {
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
}
html {
    box-sizing: border-box;
    font-size: 18px;
}

body {
    margin: 0;
    padding: 0;
    background: #fefefe;
    font-family: roboto-regular,sans-serif;
    font-weight: 400;
    line-height: 1.5;
    color: #333;
    -webkit-font-smoothing: antialiased;
  }

  a, abbr, acronym, address, applet, article, aside, audio, b, big, blockquote, body, canvas, caption, center, cite, code, dd, del, details, dfn, div, dl, dt, em, embed, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, img, ins, kbd, label, legend, li, mark, menu, nav, object, ol, output, p, pre, q, ruby, s, samp, section, small, span, strike, strong, sub, summary, sup, table, tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
    margin: 0;
    padding: 0;
    border: 0;
}
  dd{
        margin: 0;
    padding: 0;
    border: 0;

  }
  *, ::after, ::before {
    box-sizing: inherit;
    }
    a {
        background-color: transparent;
        line-height: inherit;
        color: #059;
        text-decoration: none;
        cursor: pointer;
    }
    a img {
        border: 0;
    }
    img {
        border-style: none;
        display: inline-block;
        vertical-align: middle;
        max-width: 100%;
        height: auto;
        -ms-interpolation-mode: bicubic;
    }

  
    label {
    display: block;
    margin: 0;
    font-size: .7777777778rem;
    font-weight: 400;
    line-height: 1.8;
    color: #0a0a0a;
  }

  button, input, select {
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
    margin: 0;
}

button, input, select {
    font-family: inherit;
}
button, input {
    overflow: visible;
}

[type=color], [type=date], [type=email], [type=number], [type=password], [type=search], [type=text], [type=time], [type=url], [type=week] {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 2.3333333333rem;
    margin: 0 0 0.8888888889rem;
    padding: 0.4444444444rem;
    border: 1px solid #e6e7e8;
    border-radius: 2px;
    background-color: #fefefe;
    box-shadow: none;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #0a0a0a;
    transition: box-shadow .5s,border-color .25s ease-in-out;
    -webkit-appearance: none;
    appearance: none;
}

[type=search] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
}

input[type=search] {
    box-sizing: border-box;
}

[type=color]:focus, [type=date]:focus, [type=email]:focus, [type=number]:focus, [type=password]:focus, [type=search]:focus, [type=text]:focus, [type=time]:focus, [type=url]:focus, [type=week]:focus {
    outline: 0;
    border: 1px solid #8a8a8a;
    background-color: #fefefe;
    box-shadow: 0 0 5px #e6e7e8;
    transition: box-shadow .5s,border-color .25s ease-in-out;
}

[type=button], [type=reset], [type=submit], button {
    -webkit-appearance: button;
}

[type=button], [type=submit] {
    -webkit-appearance: none;
    appearance: none;
    border-radius: 2px;
}

ul {
    margin-bottom: 1rem;
    list-style-position: outside;
    line-height: 1.6;
}

ul {
    margin-left: 40px;
    list-style-type: disc;
}

li {
    font-size: inherit;
}

.btn, button.btn, input.btn {
    background-color: #fefefe;
    background-image: linear-gradient(white,#f1f1f1);
    color: #3c3c3c;
    text-shadow: 1px 1px 0 #f1f1f1;
    border: 1px solid #f4f4f4;
    padding: 0 20px;
    cursor: pointer;
    border-radius: 2px;
    text-align: center;
    box-sizing: border-box;
    display: inline-block;
    position: relative;
    line-height: 40px;
    font-family: roboto,sans-serif;
    font-weight: 400;
    width: auto;
    white-space: nowrap;
}

.btn.btn-blue, .btn.btn-primary, .btn.primary, button.btn.btn-blue, button.btn.btn-primary, button.btn.primary {
    background-color: #059;
    background-image: linear-gradient(#0063b3,#004780);
    color: #fefefe;
    text-shadow: 1px 1px 0 #004780;
    border: 1px solid #004a85;
}

.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    font-family: opensans-bold,sans-serif;
    font-style: normal;
    font-weight: 400;
    color: inherit;
    text-rendering: optimizeLegibility;
}

.h1, h1 {
    font-size: 1.7777777778rem;
    line-height: 1.4;
    margin-top: 0;
    margin-bottom: 0.5rem;
}

.h2, h2 {
    font-size: 1.5555555556rem;
    line-height: 1.4;
    margin-top: 0;
    margin-bottom: 0.5rem;
}

h1 {
    font-family: opensans-heavy;
    line-height: 1.1;
    margin-bottom: 25px;
}

p {
    margin-bottom: 1rem;
    font-size: inherit;
    line-height: 1.6;
    text-rendering: optimizeLegibility;
}

button {
    color: #202020;
}
.h4, h4 {
    font-size: 1.2222222222rem;
    line-height: 1.4;
    margin-top: 0;
    margin-bottom: 0.5rem;
}

form input[name=contact_me_by_fax_only], form input[name=fields_lname] {
    display: none;
}
[type=checkbox], [type=file], [type=radio] {
    margin: 0 0 0.8888888889rem;
}
[type=checkbox], [type=radio] {
    box-sizing: border-box;
    padding: 0;
}

.h6, h6 {
    font-size: 1rem;
    line-height: 1.4;
    margin-top: 0;
    margin-bottom: 0.5rem;
}


div, form, h1, h2, h3, h4, h5, h6, li, p, td, th, ul {
    margin: 0;
    padding: 0;
}
a:hover {
    color: #0687e6;
}
@media print, screen and (min-width: 52.5em)
{.h1, h1 {
    font-size: 2.6666666667rem;
}
.h2, h2 {
    font-size: 2.2222222222rem;
}

.h4, h4 {
    font-size: 1.4444444444rem;
}
.h6, h6 {
    font-size: 1rem;
}
}



`;

export default GlobalStyle;
