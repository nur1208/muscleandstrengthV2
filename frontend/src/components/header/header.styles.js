import styled from "styled-components";

export const MainWrapper = styled.header`
  width: 100%;
  padding: 8px 10px;
  background: #059;

  & .header-inner {
    max-width: 1200px;
    margin: 0 auto;
  }

  .grid-x {
    display: flex;
    flex-flow: row wrap;
  }

  .cell {
    flex: 0 0 auto;
    min-height: 0;
    min-width: 0;
    width: 100%;
  }
  .cell {
    padding: 5px 0;
  }
  & label {
    display: none;
    color: #fefefe;
    font-family: roboto-medium, sans-serif;
    font-size: 13px;
    line-height: 1.2;
    cursor: pointer;
  }
  & .country-switcher {
    order: 2;
    width: 12%;
    cursor: pointer;
  }

  & .country-switcher .currency {
    display: block;
  }

  & .website-logo {
    order: 3;
    width: 52%;
    text-align: center;
  }

  .shopping-cart {
    order: 4;
    width: 12%;
    text-align: right;
  }

  .customer-account {
    order: 5;
    width: 12%;
    text-align: right;
    cursor: pointer;
  }

  .site-search {
    order: 6;
    width: 100%;
    padding: 0;
  }

  @media screen and (min-width: 46.25em) {
    & .cell {
      padding: 10px 0 0;
    }
    & .country-switcher {
      order: 4;
      width: 8%;
    }
    & .website-logo {
      order: 2;
      width: 15%;
    }

    .shopping-cart {
      order: 5;
      width: 8%;
      text-align: center;
    }

    .customer-account {
      order: 6;
      width: 8%;
      text-align: center;
    }

    .site-search {
      order: 3;
      width: 55%;
      padding: 10px 20px 0 10px;
    }
  }

  @media screen and (min-width: 52.5em) {
    label {
      display: block;
    }
  }

  @media screen and (min-width: 64em) {
    padding: 10px 0 0;
    & .country-switcher {
      order: 3;
      width: 8%;
      text-align: center;
    }
    & .website-logo {
      order: 1;
      width: 12%;
    }
    .shopping-cart {
      order: 4;
      width: 8%;
    }

    .customer-account {
      order: 5;
      width: 8%;
    }

    .site-search {
      order: 2;
      width: 64%;
    }
  }
  @media screen and (min-width: 75em) {
    padding: 5px 0;
    & .country-switcher {
      order: 4;
      width: 6%;
      padding-top: 33px;
    }

    & .website-logo {
      order: 1;
      width: 10%;
      text-align: left;
    }

    .shopping-cart {
      order: 5;
      width: 6%;
      padding-top: 15px;
    }

    .customer-account {
      order: 6;
      width: 6%;
      padding-top: 18px;
    }

    .site-search {
      order: 2;
      width: 52%;
    }
  }
`;
