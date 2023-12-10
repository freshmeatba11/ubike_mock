import styled from "styled-components";

import Metrics from "@/theme/metrics";
import Styles from "../../theme/styles";

const Wrapper = styled(Styles.button())`
  padding: 10px 24px;
  border-radius: 100px;
  font-size: 16px;
  background: var(--header-button-color);
  color: var(--header-button-text);
  flex-shrink: 0;

  @media ${Metrics.media.desk} {
    --header-button-color: var(--green-01);
    --header-button-text: var(--white-01);
    font-size: 18px;
  }
`;
export const LoginButton = () => {
  return <Wrapper>登入</Wrapper>;
};
