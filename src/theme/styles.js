import styled from "styled-components";

const Styles = {
  main: () => styled.main`
    background-color: var(--main-background);
    width: 100svw;
    height: calc(100svh - 72px);
  `,
  button: () => styled.button`
    background-color: var(--header-button-color);
    border: none;
    cursor: pointer;
  `,
};
export default Styles;
