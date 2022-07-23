import "./list.css";

const UserComponent = ({ userData: { img, name, disc } }) => {
  return (
    <li className="user_list_li">
      <div className="user_list_img">
        <img src={`./images/${img}`} alt="" />
      </div>
      <div className="user_list_content">
        <p className="user_list_name">{name}</p>
        <p className="user_list_disc">{disc}</p>
      </div>
    </li>
  );
};

export { UserComponent };
