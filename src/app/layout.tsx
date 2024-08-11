import { Inter } from "next/font/google";
import { Header } from "@/app/components/header";
import { MinHeight } from "@/app/components/min-height";
import { Container, MaxWidth, StyledComponentsRegistry } from "cherry-styled-components/src/lib";
import { CherryThemeProvider } from "@/app/components/theme-provider";
import { theme, themeDark } from "@/app/theme";
import { Sidebar } from "@/app/components/sidebar";
import { Content } from "@/app/components/content";
import { DocsFooter } from "@/app/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <CherryThemeProvider theme={theme} themeDark={themeDark}>
            <MinHeight>
              <Header />
              <Container $fluid>
                <Sidebar />
                <MaxWidth $lg={600}>
                  <Content>{children}</Content>
                  <DocsFooter />
                </MaxWidth>
              </Container>
            </MinHeight>
          </CherryThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
