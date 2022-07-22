import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { FeedPage } from "./pages/feed-page/FeedPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FeedPage />
    </div>
  );
}

export default App;
