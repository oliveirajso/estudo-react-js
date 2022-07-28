import Link from "next/link";
import { MENU_ITEMS } from "../../constants/menu-items";
import { SidebarContainer } from "./style";
import MenuItemsList from "../MenuItemsList";

interface SidebarProps {
  isOpened: boolean,
}
export default function Sidebar({ isOpened }: SidebarProps) {

  return (<SidebarContainer isOpened={isOpened} >
    <MenuItemsList options={MENU_ITEMS} />
  </SidebarContainer>);
}
