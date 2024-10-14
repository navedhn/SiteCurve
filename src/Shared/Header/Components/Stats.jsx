import React from "react";
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

  return (
    <div className="stats stats-slider ">
      <div className="stats-slider-inner grid grid-cols-12 gap-1">
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
