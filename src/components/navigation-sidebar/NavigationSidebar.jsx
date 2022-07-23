import { SidebarLinks } from "./components/SidebarLinks";
import { SidebarSocials } from "./components/SidebarSocials";
import sidebarStyles from "./navigation-sidebar.module.css";

const NavigationSidebar = () => {
  return (
    <aside className={sidebarStyles.aside}>
      <SidebarLinks />
      <SidebarSocials />
    </aside>
  );
};

export { NavigationSidebar };
