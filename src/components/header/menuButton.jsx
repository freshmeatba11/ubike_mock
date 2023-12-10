import styled from "styled-components";

import Metrics from "@/theme/metrics";
import Styles from "@/theme/styles";

const MenuButtonWrapper = styled(Styles.button())`
  width: 24px;
  height: 24px;

  @media ${Metrics.media.desk} {
    display: none;
  }
`;

export const MenuButton = ({ onClick, children }) => {
  return <MenuButtonWrapper onClick={onClick}>{children}</MenuButtonWrapper>;
};
