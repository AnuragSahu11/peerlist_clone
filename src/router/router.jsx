import { Route, Routes } from "react-router-dom";
import { FeedPage } from "../pages/feed-page/FeedPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<FeedPage />} />
    </Routes>
  );
};

export { Router };
