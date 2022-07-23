import "./list.css";
import { UserComponent } from "./UserComponent";

const UserList = ({ userList = [] }) => {
  return (
    <ul className="user_list_wrapper">
      {userList.map((user) => (
        <UserComponent userData={user} />
      ))}
    </ul>
  );
};

export { UserList };
