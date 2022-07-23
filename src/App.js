import "./App.css";
import { Router } from "./router/router";
import { Navbar } from "./components/navbar/Navbar";
import { NavigationSidebar } from "./components/navigation-sidebar/NavigationSidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app_body">
        <NavigationSidebar />
        <Router />
      </div>
    </div>
  );
}

export default App;
