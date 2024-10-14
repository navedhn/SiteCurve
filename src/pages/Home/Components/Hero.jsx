import { ReactSVG } from "react-svg";
import React, { useEffect, useState } from "react";
// components
import CustomButton from "../../../Shared/CustomButton/CustomButton";

// assets
import creditCard from "../../../assets/creditCard.svg";
import section1 from "../../../assets/section_1.png";
import { IoSearch } from "react-icons/io5";

function Hero() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Function to update the state based on window resize
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Add event listener to update window width on resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className="hero-section">
      <h1>
        Discover Who’s Winning and
        {windowWidth > 768 && <br />} Losing in SEO and Why
      </h1>
      <p className="mt-5">
        Spot winning and losing websites across your competitive landscape in different {window.innerWidth > 768 && <br />}
        niches, website types, and business models.
      </p>
      <div className="mt-7 gap-4 flex justify-center flex-wrap">
        <CustomButton title="Create Landscape - It's Free" />
        <button className="sch-btn">Schedule Product Demo</button>
      </div>
      <div className="credit-card flex justify-center mt-5">
        <ReactSVG src={creditCard} /> &nbsp; No Credit Card Required
      </div>
      <div className="section-img-dashboard flex justify-center">
        <img src={section1} />
      </div>
      {windowWidth > 768 ? (
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
