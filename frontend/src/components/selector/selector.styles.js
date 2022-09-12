import styled from "styled-components";

export const MainWrapper = styled.div`
  &,
  * {
    box-sizing: border-box;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  display: inline-block;
  position: relative;
  width: 100%;
  height: 42px;
  padding: 12px 8px 11px 10px;
  border: 1px solid #ddd;
  background: #fff;
  text-align: left;
  line-height: 1;
  outline: 0;
  outline-offset: -2px;
  cursor: pointer;
  border-radius: 2px;
  color: #303030;

  select {
    width: 100%;
    padding: 12px 8px 11px 10px;
    height: 42px;
    display: block;
    line-height: 1.1;
    clear: left;
    color: #303030;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 2px !important;
    background: #fff;
  }
  ${({ isBlue }) =>
    isBlue &&
    `
        color: #059;
    `}

  &:after, &:before {
    content: "▲";
    position: absolute;
    right: 10px;
    font-size: 7px;
    top: 10px;
  }

  &:after {
    content: "▼";
    top: auto;
    bottom: 10px;
  }

  .sod_label {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-right: 15px;
  }

  .sod_list_wrapper {
    position: absolute;
    top: 100%;
    left: 0;
    display: none;
    height: auto;
    width: 100%;
    background: #fff;
    border: 1px solid #a2a2a2;
    border-top: 1px solid #aaa;
    color: #535353;
    z-index: 1;
    border-radius: 0 0 2px 2px;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  .sod_list {
    display: block;
    overflow-y: auto;
    padding: 0;
    margin: 0;
    max-height: 300px;
  }

  .sod_option {
    display: block;
    position: relative;
    padding: 10px;
    list-style-type: none;
  }

  .sod_option.active {
    background: #059;
    color: #fff;
  }
  .sod_option.selected {
    padding-right: 25px;
  }

  .sod_option.disabled {
    background: #fff;
    color: #d5d5d5;
    cursor: not-allowed;
  }
  &:hover {
    border-color: #888;
  }

  select {
    display: none;
  }

  ${({ customStyle }) => (customStyle ? customStyle : "")}

  .sod_option {
    font-size: 13px;
  }

  .sod_label {
    font-size: 14px;
  }
  ${({ isOpen }) =>
    isOpen &&
    `
    border-color: #888;
    color: #919191;
    box-shadow: 0 0 5px rgb(0 0 0 / 20%);
    .sod_list_wrapper {
        display: block;
    }

    .sod_option.selected:before {
        content: "";
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        display: inline-block;
        color: #aaa;
        height: 9px;
        width: 10px;
        background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNy4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMTAgOSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMTAgOSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBmaWxsPSIjRDlEOUQ4IiBkPSJNNCw2LjdDMy42LDYuMywzLjUsNi4xLDMuMSw1LjdDMi42LDUuMiwyLDQuNiwxLjUsNC4xYy0wLjgtMC44LTIsMC40LTEuMiwxLjJjMC45LDAuOSwxLjksMS45LDIuOCwyLjgNCgkJYzAuNywwLjcsMS4zLDEsMiwwQzYuNyw2LDguMywzLjcsOS44LDEuNUMxMC41LDAuNSw5LTAuMyw4LjMsMC42bDAsMEM2LjcsMi45LDUuNyw0LjQsNCw2LjciLz4NCjwvZz4NCjwvc3ZnPg0K);
    }
    `}

  ${({ isError }) =>
    isError &&
    `
        border: 1px solid red;
    `}
`;
