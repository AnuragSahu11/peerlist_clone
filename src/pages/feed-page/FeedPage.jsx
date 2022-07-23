import { RecommendationSidebar } from "../../components/recommendation-sidebar/RecommendationSidebar";
import { CreatePost } from "./components/CreatePost";
import { PostContainer } from "./components/PostContainer";
import { FeedPageTabs, SwitchTabs } from "./components/FeedPageTabs";
import "./feedpage.css";

const postList = [
  {
    id: "p1",
    postBy: "Anurag Sagar",
    postAt: "18 Jul, 2022",
    postDisc: "Finally created a portfolio website Yay",
    dp: "p1dp.webp",
    postContent: {
      type: "share",
      title: "Portfolio",
      content:
        "My portfolio website. This was created using Next.js and tailwindCSS. It is to showcase all my projects and my skills.",
      img: "https://dqy38fnwh4fqs.cloudfront.net/UH6A879NL6867QPHGO6DJ7GB7K66/projects/Portfolio.png?v1.1",
    },
    likes: 5,
  },
  {
    id: "p2",
    postBy: "Mohammed Hakkim",
    postAt: "21 Jul, 2022",
    postDisc:
      "List vs Set Data Structure:Use Set instead of List when finding for a key value. Why?",
    dp: "p2dp.webp",
    postContent: {
      type: "share",
      title: "Live vs Data Structure",
      content: "Use set instead of List when finding for a key value",
      img: "https://hashnode.com/utility/r?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Funsplash%2FLBLwrhwOe28%2Fupload%2Fv1658419587515%2F36a2qH9kT.jpeg%3Fw%3D1200%26h%3D630%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp%26fm%3Dpng",
    },
    likes: 5,
  },

  {
    id: "p2",
    postBy: "Mohammed Hakkim",
    postAt: "21 Jul, 2022",
    postDisc:
      "List vs Set Data Structure:Use Set instead of List when finding for a key value. Why?",
    dp: "p2dp.webp",
    postContent: {
      type: "share",
      title: "Live vs Data Structure",
      content: "Use set instead of List when finding for a key value",
      img: "https://hashnode.com/utility/r?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Funsplash%2FLBLwrhwOe28%2Fupload%2Fv1658419587515%2F36a2qH9kT.jpeg%3Fw%3D1200%26h%3D630%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp%26fm%3Dpng",
    },
    likes: 5,
  },
];

const FeedPage = () => {
  return (
    <>
      <section className="feed_section">
        <FeedPageTabs />
        <CreatePost />
        <PostContainer postList={postList} />
      </section>
      <RecommendationSidebar />
    </>
  );
};

export { FeedPage };
