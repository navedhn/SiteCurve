<<<<<<< HEAD
import React, { useEffect, useRef } from 'react';
=======
import React from "react";
>>>>>>> 7d18d2c2b81dec585a5d5633da6ce52b2c574c82
import { Link } from "react-router-dom";
import { RiInformation2Line } from "react-icons/ri";
import { FiArrowUpRight, FiArrowDownLeft } from "react-icons/fi";

const Stats = () => {
  const data = [
    { name: "capitalone.com", stats: "4.2M", rating: 52, up: true },
    { name: "example.com", stats: "1.2M", rating: 45, up: true },
    { name: "test.com", stats: "900K", rating: 38, up: false },
    { name: "sample.com", stats: "5M", rating: 60, up: true },
    { name: "capitalone.com", stats: "4.2M", rating: 52, up: true },
    { name: "example.com", stats: "1.2M", rating: 45, up: true },
    { name: "test.com", stats: "900K", rating: 38, up: false },
    { name: "sample.com", stats: "5M", rating: 60, up: true },
    { name: "sample.com", stats: "5M", rating: 60, up: true },
    { name: "capitalone.com", stats: "4.2M", rating: 52, up: true },
    { name: "example.com", stats: "1.2M", rating: 45, up: true },
    { name: "test.com", stats: "900K", rating: 38, up: false },
    { name: "sample.com", stats: "5M", rating: 60, up: true },
  ];

<<<<<<< HEAD
  const partnersRef = useRef(null);
  const scrollSpeed = 2; // Adjust the speed (higher value = faster scrolling)

  useEffect(() => {
    const allPartners = partnersRef.current;

    if (allPartners) {
      // Duplicate the logos to create a seamless infinite scroll effect
      allPartners.innerHTML += allPartners.innerHTML;

      // Set the initial scroll position
      let scrollLeft = 0;
      let isScrolling = true;

      const scroll = () => {
        if (isScrolling) {
          scrollLeft += scrollSpeed;

          // If scrolled past the duplicated content, reset to the original content
          if (scrollLeft >= allPartners.scrollWidth / 2) {
            scrollLeft = 0;
          }

          allPartners.scrollLeft = scrollLeft;
        }
      };

      const continuousScroll = setInterval(scroll, 1000 / 60); // 60 FPS

      // Event listeners for pausing and resuming the scroll on hover
      const stopScroll = () => {
        isScrolling = false;
      };

      const resumeScroll = () => {
        isScrolling = true;
      };

      allPartners.addEventListener('mouseenter', stopScroll);
      allPartners.addEventListener('mouseleave', resumeScroll);

      // Cleanup on unmount
      return () => {
        clearInterval(continuousScroll);
        allPartners.removeEventListener('mouseenter', stopScroll);
        allPartners.removeEventListener('mouseleave', resumeScroll);
      };
    }
  }, []);

  return (
    <div className="stats stats-slider">
      <div className="stats-slider-inner grid grid-cols-12 gap-1 stats-slider" ref={partnersRef}>
=======
  return (
    <div className="stats stats-slider ">
      <div className="stats-slider-inner grid grid-cols-12 gap-1">
>>>>>>> 7d18d2c2b81dec585a5d5633da6ce52b2c574c82
        {data &&
          data.map((item, idx) => (
            <div key={idx} className="col-span-5 sm:col-span-12">
              <div className="stats-card">
                <Link to="/" className="flex align-center">
                  <div>{item.name}</div>
                  <div>
                    <RiInformation2Line />
                  </div>
                </Link>
                <div className="statistics">
                  <p className="rating">{item.stats}</p>
                  <p className={`stat-1 flex align-center ${item.up ? "success" : "danger"}`}>
                    {item.up ? <FiArrowUpRight size={16} /> : <FiArrowDownLeft size={16} />} {item.rating}%
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Stats;
