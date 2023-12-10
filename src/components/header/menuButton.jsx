import styled from "styled-components";

import Styles from "../styles";

const MenuButtonWrapper = styled(Styles.button())`
  width: 24px;
  height: 24px;
`;

export const MenuButton = ({ onClick, children }) => {
  return <MenuButtonWrapper onClick={onClick}>{children}</MenuButtonWrapper>;
};
