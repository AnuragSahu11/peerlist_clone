import { UserComponent } from "../../../components/lists/UserComponent";
import { BiDotsVerticalRounded } from "react-icons/bi";
import "./postComponent.css";
import { SharePostContent } from "./SharePostContent";
import { BiCommentDetail } from "react-icons/bi";
import { AiOutlineLike } from "react-icons/ai";

const PostComponent = ({
  postData: {
    id,
    postBy,
    postAt,
    likes,
    postDisc,
    dp,
    postContent: { type = "", title = "", content = "", img = "" } = {},
  },
}) => {
  let showPostContent;
  switch (type) {
    case "share":
      showPostContent = (
        <SharePostContent contentData={{ title, content, img }} />
      );
      break;
    case "link":
      showPostContent = <a href={content}>{content}</a>;
      break;
    case "image":
      showPostContent = (
        <div className="post_content_img">
          <img src={img} alt="" />
        </div>
      );
    default:
  }
  return (
    <div className="post_wrapper">
      <div className="post_head">
        <UserComponent userData={{ name: postBy, img: dp, disc: postAt }} />
        <div className="post_head_button">
          <span className="post_head_button_type">URL</span>
          <BiDotsVerticalRounded className="post_head_button_icon" />
        </div>
      </div>
      <div className="post_body">
        <div className="post_disc">{postDisc}</div>
        <div className="post_content">{showPostContent}</div>
        <div className="post_buttons">
          <button className="post_button_btn">
            <BiCommentDetail className="post_button_icons" />
          </button>
          <button className="post_button_btn">
            <AiOutlineLike className="post_button_icons" />
          </button>
          <span>{likes}</span>
        </div>
      </div>
    </div>
  );
};

export { PostComponent };
