import React, { useEffect, useState } from "react";

const Header = () => {
  const [date, setDate] = useState(new Date());
  const options = {
    month: "long",
    day: "numeric",
    year: "numeric",
    // weekday: "long",
  };

  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 60 * 1000);

    return () => {
      clearInterval(timer);
    };
  });
  return (
    <header className="Header">
      <div className="Header__left">
        <div className="Header__left__date">
          <p>
            <span className="fas fa-calendar"></span>
            {date.toLocaleDateString("en-GB", options)}{" "}
            {date.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
        <div className="Header__left__phone"></div>
      </div>
      <div className="Header__right">
        <div className="Header__right__socials">
          <span className="fab fa-facebook"></span>
          <span className="fab fa-twitter"></span>
          <span className="fab fa-instagram"></span>
          <span className="fab fa-youtube"></span>
        </div>
        <div className="Header__right__login"></div>
      </div>
    </header>
  );
};

export default Header;
