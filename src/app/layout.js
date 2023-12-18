import { Noto_Sans_TC } from "next/font/google";
import "./globals.css";

import Providers from "@/lib/provider";
import StyledComponentsRegistry from "@/lib/registry";

import { Header } from "@/components/header/header";

const notoSansTC = Noto_Sans_TC({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "YouBike微笑單車 Mock",
  description: "YouBike微笑單車 Mock",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={notoSansTC.className} style={{ position: "relative" }}>
        <Providers>
          <StyledComponentsRegistry>
            <Header />
            {children}
          </StyledComponentsRegistry>
        </Providers>
      </body>
    </html>
  );
}
