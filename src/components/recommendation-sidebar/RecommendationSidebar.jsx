import { UserList } from "../lists/UserList";
import sidebarStyles from "./recommendation-sidebar.module.css";

const usersList = [
  {
    name: "Tony Han",
    img: "tony.webp",
    disc: "Senior Product Manager @GoodLeap, a solar financing tech company.",
  },
  {
    name: "Mark Ridley",
    img: "mark.webp",
    disc: "Experienced CTO/CIO who also does some product and strategy.Works with a bunch of startups and some bigger businesses",
  },
  {
    name: "Steve Gacka",
    img: "steve.webp",
    disc: "💼 Founding Engineer & CTO @ Startups.com 👨🏻‍💻 Full-Stack JS Development 🐕 Obsessed Dog-Dad 🏙 Columbus, Ohio USA",
  },
  {
    name: "Jose Tizon",
    img: "jose.webp",
    disc: "Software Development Manager and Bar Raiser at Amazon",
  },
];

const RecommendationSidebar = () => {
  return (
    <aside className={sidebarStyles.aside}>
      <h3 className={sidebarStyles.heading}>Recommended people</h3>
      <div className={sidebarStyles.users_wrapper}>
        <UserList userList={usersList} />
      </div>
    </aside>
  );
};

export { RecommendationSidebar };
