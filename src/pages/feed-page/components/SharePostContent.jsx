import "./postComponent.css";

const SharePostContent = ({ contentData: { title, content, img } }) => {
  return (
    <div className="post_content_share">
      <div className="post_content_share_text">
        <p className="post_content_share_heading">{title}</p>
        <p className="post_content_share_disc"> {content} </p>
      </div>
      <div className="post_content_share_img">
        <img src={img} alt="" />
      </div>
    </div>
  );
};
export { SharePostContent };
