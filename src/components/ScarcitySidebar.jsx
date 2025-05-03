import React, { useEffect, useState, useContext } from "react";
import ThemeContext from "../store/ThemeContext";

const scarcityImages = [
  "/images/limited1.jpg",
  "/images/limited2.jpg",
  "/images/limited3.jpg",
];

function ScarcitySidebar() {
  const { theme, fontSize } = useContext(ThemeContext); // ✅ Access theme and fontSize
  const [currentIndex, setCurrentIndex] = useState(0);
  const [orderCount, setOrderCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % scarcityImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Random number between 850 and 2000
    const randomOrders = Math.floor(Math.random() * 1150) + 850;
    setOrderCount(randomOrders);
  }, []);

  return (
    <div className={`theme-${theme} font-${fontSize}`}>
    <div className="scarcity-sidebar">
      <h3>🔥Selling Fast!</h3>
      <img
        src={scarcityImages[currentIndex]}
        alt="Limited stock"
        className="scarcity-image"
      />
      <p className="scarcity-text">Hurry up! <br/>Only a few left in stock!</p>

      <div className="scarcity-footer">
        <p><strong>{orderCount.toLocaleString()}</strong> people ordered delicious meals from <strong>FOODIEE</strong> today. <br/> Try now!</p>
      </div>
    </div>
    </div>
  );
}

export default ScarcitySidebar;
