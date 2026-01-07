import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Epaper.css";

const Epaper = () => {
  const navigate = useNavigate();
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <div className="epaper-page">
      {/* Custom Header */}
      <div className="epaper-header">
        <div className="epaper-left">
          <span className="epaper-date">{today}</span>
          <select className="epaper-edition">
            <option>ঢাকা সংস্করণ</option>
            <option>চট্টগ্রাম সংস্করণ</option>
            <option>রাজশাহী সংস্করণ</option>
          </select>
        </div>

        <div className="epaper-logo">
       <Link to='/' >   <img src="/images/logoblack.png" alt="Logo" /></Link>
        </div>

        <div className="epaper-right">
        
          <button className="back-btn" onClick={() => navigate(-1)}>Go Back</button>
        </div>
      </div>

      {/* Main Content */}
      <div className="epaper-body">
        <img src="/images/epaper_img.png" alt="Epaper" className="epaper-img" />
      </div>
    </div>
  );
};

export default Epaper;
