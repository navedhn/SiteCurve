import { ReactSVG } from "react-svg";
import React, { useEffect, useState } from "react";
// components
import CustomButton from "../../../Shared/CustomButton/CustomButton";

// assets
import creditCard from "../../../assets/creditCard.svg";
import section1 from "../../../assets/home/img-heros.png";
import { IoSearch } from "react-icons/io5";
import follow from "../../../assets/home/Vector.svg";
import robust from "../../../assets/home/robust.svg";
import search from "../../../assets/home/search.svg";

function Hero() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className="hero-section">
      <h1>
        Discover Who’s Winning and
        {windowWidth > 767 && <br />} Losing in SEO and Why
      </h1>
      <p className="mt-5">
        Spot winning and losing websites across your competitive landscape in different {window.innerWidth > 767 && <br />}
        niches, website types, and business models.
      </p>
      <div className="mt-7 gap-4 flex justify-center flex-wrap">
        <div id="hero-btn" className="lg:w-auto md:w-auto w-full">
          {/* <CustomButton title="Create Landscape - It's Free" /> */}
          <button className="primary-btn pbn">
            Create Landscape - <span>It's Free</span>
          </button>
        </div>
        <button className="sch-btn">{windowWidth > 767 ? "Schedule Demo" : "Schedule Product Demo"}</button>
      </div>
      <div className="credit-card flex justify-center mt-5">
        <ReactSVG src={creditCard} /> &nbsp; No Credit Card Required
      </div>
      <div className="section-img-dashboard flex justify-center ">
        <img src={section1} />
      </div>
      {windowWidth > 767 ? (
        <p className="searching">
          <IoSearch />
          Discover existing landscapes: <span>Real Estate Agents, Credit Cards, Lawyers</span>
        </p>
      ) : (
        <p className="searching flex flex-wrap">
          <IoSearch />
          Discover existing landscapes:{" "}
          <div>
            <span>Real Estate Agents, Credit Cards, Lawyers</span>
          </div>
        </p>
      )}
    </section>
  );
}

export default Hero;
