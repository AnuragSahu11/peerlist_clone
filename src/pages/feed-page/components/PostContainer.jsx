import { PostComponent } from "./PostComponent";

const PostContainer = ({ postList = [] }) => {
  return (
    <div className="post_container">
      {postList.map((post) => (
        <PostComponent postData={post} />
      ))}
    </div>
  );
};

export { PostContainer };
