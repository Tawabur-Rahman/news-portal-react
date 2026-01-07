// src/context/StoreContext.jsx
import { createContext, useState, useEffect } from "react";
import newsData from "../Data/data";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  // new states for filter/search
  const [category, setCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setNews(newsData);
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <StoreContext.Provider
      value={{
        news,
        loading,
        category,
        setCategory,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
