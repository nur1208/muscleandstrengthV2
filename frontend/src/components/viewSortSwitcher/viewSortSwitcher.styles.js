import styled from "styled-components";

export const MainWrapper = styled.div`
  h2.switcher-heading {
    background: #059;
    margin: 0 -15px;
    padding: 5px;
    text-align: center;
    color: #fff;
    text-transform: uppercase;
    font-size: 20px;
  }

  #mnsview-sort-switcher {
    margin: 0 -15px 15px;
    padding: 0;
    line-height: 22px;
  }

  #mnsview-sort-switcher ul {
    margin: 0;
    padding: 0;
  }

  ul li {
    list-style: none;
  }

  #mnsview-sort-switcher ul li a {
    display: block;
    padding-bottom: 5px;
    border-right: 1px solid #ddd;
    background-color: #f5f5f5;
    color: #aaa;
    font-size: 11px;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
  }
  #mnsview-sort-switcher ul li.active a {
    background-color: #fefefe;
    color: #059;
  }

  #mnsview-sort-switcher ul li a .out,
  #mnsview-sort-switcher ul li a .over {
    line-height: 0;
    padding-top: 5px;
  }
  #mnsview-sort-switcher ul li a .out {
    display: block;
  }

  #mnsview-sort-switcher ul li.active a .out {
    display: none;
  }

  svg {
    width: 30px;
    height: 30px;
  }

  #mnsview-sort-switcher ul li a .over {
    display: none;
  }

  #mnsview-sort-switcher ul li.active a .over {
    display: block;
  }

  @media screen and (min-width: 37.5em) {
    h2.switcher-heading {
      margin: 0;
    }

    #mnsview-sort-switcher {
      margin: 0 0 25px;
    }

    #mnsview-sort-switcher ul li a {
      font-size: 13px;
    }
  }
`;
