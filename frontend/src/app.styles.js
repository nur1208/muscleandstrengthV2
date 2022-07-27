import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
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
`;

export default GlobalStyle;
