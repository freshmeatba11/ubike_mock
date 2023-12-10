import React from "react";
import styled from "styled-components";

import Styles from "../../theme/styles";

const Wrapper = styled(Styles.button())`
  padding: 10px 24px;
  border-radius: 100px;
  font-size: 16px;
  background: var(--header-button-color);
  color: var(--header-button-text);
`;
export const LoginButton = () => {
  return <Wrapper>登入</Wrapper>;
};
