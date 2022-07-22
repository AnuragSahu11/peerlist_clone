import sidebarStyles from "../navigation-sidebar.module.css";
import { CgProfile } from "react-icons/cg";
import { TbListDetails } from "react-icons/tb";
import { IoPeopleOutline } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";

const SidebarLinks = () => {
  return (
    <div>
      <ul className={sidebarStyles.ul}>
        <li className={sidebarStyles.li}>
          <span className={sidebarStyles.span}>
            <CgProfile />
          </span>{" "}
          Profile
        </li>
        <li className={sidebarStyles.li}>
          <span className={sidebarStyles.span}>
            <TbListDetails />
          </span>{" "}
          Scroll
        </li>
        <li className={sidebarStyles.li}>
          <span className={sidebarStyles.span}>
            <IoPeopleOutline />
          </span>{" "}
          My Network
        </li>
        <li className={sidebarStyles.li}>
          <span className={sidebarStyles.span}>
            <AiOutlineSearch />
          </span>{" "}
          Find
        </li>
      </ul>
    </div>
  );
};

export { SidebarLinks };
