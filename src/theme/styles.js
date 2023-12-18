import styled from "styled-components";

import Metrics from "./metrics";

const Styles = {
  main: () => styled.main`
    background-color: var(--main-background);
    width: 100svw;
    height: calc(100svh - 73px);
    margin: 73px 0 0 0;
    padding-top: 34px;
    padding-inline: 32px;

    @media ${Metrics.media.desk} {
      max-width: 1192px;
      height: calc(100svh - 104px);
      margin: 104px auto 0 auto;
    }
  `,
  button: () => styled.button`
    background-color: var(--header-button-color);
    border: none;
    cursor: pointer;
  `,
};
export default Styles;
