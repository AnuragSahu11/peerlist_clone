import "./navbar.css";
import { HiOutlineBell } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav>
      <div className="nav_content_wrapper">
        <div className="nav_logo"></div>
        <div className="nav_body">
          <div className="nav_search">
            <label>
              <AiOutlineSearch />
            </label>
            <input
              type="text"
              className="nav_search_input text-sm"
              placeholder="Search Peerlist..."
            />
          </div>
          <div className="nav_notification">
            <div className="nav_notification_icon_wrapper">
              <HiOutlineBell className="nav_notification_icon" />
            </div>
          </div>
          <div className="nav_profile">
            <img
              className="nav_profile_img"
              src="https://joeschmoe.io/api/v1/random"
              alt=""
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
