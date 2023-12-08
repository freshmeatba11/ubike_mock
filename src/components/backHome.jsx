import styled from "styled-components";
import { usePathname } from "next/navigation";
import Link from "next/link";

import Styles from "./styles";

const Wrapper = styled(Styles.main())`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    font-size: 18px;
  }
  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const list = {
  "/information": "使用說明",
  "/fee": "收費方式",
  "/news": "最新消息",
  "/events": "活動專區",
};

export const BackHome = () => {
  const pathname = usePathname();

  return (
    <Wrapper>
      <p>Here is {list[pathname]} page!</p>
      <p>
        <Link href="/">Return 站點資訊</Link>
      </p>
    </Wrapper>
  );
};
