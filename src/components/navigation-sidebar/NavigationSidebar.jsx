import { SidebarLinks } from "./components/SidebarLinks";
import sidebarStyles from "./navigation-sidebar.module.css";

const NavigationSidebar = () => {
  return (
    <aside className={sidebarStyles.aside}>
      <SidebarLinks />
    </aside>
  );
};

export { NavigationSidebar };
