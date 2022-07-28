
import Footer from "../Footer";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Container, Content, PageContainer } from "./styles";
import { ThemeProvider } from "@material-tailwind/react";
import { useEffect, useLayoutEffect, useState } from "react";
import useLocalStorage from "../common/persistenciaUteis";

interface DashboardLayoutProps {
  children: React.ReactNode,
};
export default function Layout({ children }: DashboardLayoutProps) {

  const [isOpened, setOpened] = useState(true);



  const toggleDrawer = () => {
    setOpened((prev) => !prev)
  };
  return (
    <ThemeProvider >
      <Container>
        <Header isOpened={isOpened} toggleDrawer={toggleDrawer} />
        <Content>
          <Sidebar isOpened={isOpened} />
          <PageContainer>{children}</PageContainer>
        </Content>
        <Footer />
      </Container>
    </ThemeProvider>
  );
}