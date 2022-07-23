import sidebarStyles from "../navigation-sidebar.module.css";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLinkAlt } from "react-icons/bi";

const SidebarSocials = () => {
  return (
    <div>
      <div className={sidebarStyles.job_wrapper}>
        <div className={sidebarStyles.job}>
          <img src="./images/book.svg" alt="" />
          <p className={sidebarStyles.job_para}>
            Are you looking for a job opportunity? If yes, then don’t forget to
            set your
          </p>
          <button className={sidebarStyles.button}>Job Preferences</button>
        </div>
      </div>
      <div className={sidebarStyles.socials}>
        <p className={sidebarStyles.socials_para_one}>
          Share your Peerlist profile with your network.
        </p>
        <div className={sidebarStyles.link_wrapper}>
          <div className={sidebarStyles.link_span}>
            <AiOutlineTwitter className={sidebarStyles.icon_twitter} />
          </div>
          <div className={sidebarStyles.link_span}>
            <FaLinkedinIn className={sidebarStyles.icon_linkdin} />
          </div>
          <div className={sidebarStyles.link_span}>
            <BiLinkAlt className={sidebarStyles.icon_link} />
          </div>
        </div>
        <p className={sidebarStyles.socials_links}>
          Share Feedback • Contact • Privacy • Code of Conduct • T&C • Blog •
          Twitter
        </p>
        <p className={sidebarStyles.socials_para_one}>
          © 2022 Peerlist Digital Pvt Ltd
        </p>
      </div>
    </div>
  );
};

export { SidebarSocials };
