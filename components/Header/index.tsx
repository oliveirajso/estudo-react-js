import { ChevronLeft, Menu } from "@styled-icons/material";
import { HeaderContainer, TitleContainer, IconContainer } from "./style";
interface HeaderProps {
  isOpened: boolean,
  toggleDrawer: () => void,
}
export default function Header({ isOpened, toggleDrawer }: HeaderProps) {
  return (
    <HeaderContainer>
      <IconContainer onClick={toggleDrawer}>
        {isOpened ? <ChevronLeft /> : <Menu />}
      </IconContainer>
        <TitleContainer>Header</TitleContainer>
    </HeaderContainer>
  );
}