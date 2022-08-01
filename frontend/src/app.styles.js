import { createGlobalStyle } from "styled-components";

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

@media print, screen and (min-width: 52.5em)
{.h1, h1 {
    font-size: 2.6666666667rem;
}
.h2, h2 {
    font-size: 2.2222222222rem;
}
}



`;

export default GlobalStyle;
