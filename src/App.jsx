import { Route, Routes, useLocation } from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Epaper from "./Pages/Epaper/Epaper";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import NewsDetails from "./Components/NewsDetails/NewsDetails";

const App = () => {
  const location = useLocation();
  const hideLayout = location.pathname === "/login";
  const isEpaper = location.pathname === "/epaper";

  return (
    <>
      {!hideLayout && !isEpaper && <Navbar />}

      <div className={hideLayout ? "app-full" : "app"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/news/:slug" element={<NewsDetails />} />
          <Route path="/epaper" element={<Epaper />} />
        </Routes>
      </div>

      {!hideLayout && <Footer />}
    </>
  );
};

export default App;
