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

<<<<<<< HEAD
=======
  // Function to update the state based on window resize
>>>>>>> 7d18d2c2b81dec585a5d5633da6ce52b2c574c82
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
<<<<<<< HEAD
    window.addEventListener("resize", handleResize);

=======
    // Add event listener to update window width on resize
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener when the component unmounts
>>>>>>> 7d18d2c2b81dec585a5d5633da6ce52b2c574c82
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className="hero-section">
      <h1>
        Discover Who’s Winning and
<<<<<<< HEAD
        {windowWidth > 767 && <br />} Losing in SEO and Why
      </h1>
      <p className="mt-5">
        Spot winning and losing websites across your competitive landscape in different {window.innerWidth > 767 && <br />}
        niches, website types, and business models.
      </p>
      <div className="mt-7 gap-4 flex justify-center flex-wrap">
        <div id="hero-btn" className="lg:w-auto md:w-auto w-full">
          <CustomButton title="Create Landscape - It's Free" />
        </div>
        <button className="sch-btn">{windowWidth > 767 ? "Schedule Demo" : "Schedule Product Demo"}</button>
=======
        {windowWidth > 768 && <br />} Losing in SEO and Why
      </h1>
      <p className="mt-5">
        Spot winning and losing websites across your competitive landscape in different {window.innerWidth > 768 && <br />}
        niches, website types, and business models.
      </p>
      <div className="mt-7 gap-4 flex justify-center flex-wrap">
        <CustomButton title="Create Landscape - It's Free" />
        <button className="sch-btn">Schedule Product Demo</button>
>>>>>>> 7d18d2c2b81dec585a5d5633da6ce52b2c574c82
      </div>
      <div className="credit-card flex justify-center mt-5">
        <ReactSVG src={creditCard} /> &nbsp; No Credit Card Required
      </div>
      <div className="section-img-dashboard flex justify-center">
        <img src={section1} />
      </div>
<<<<<<< HEAD
      {windowWidth > 767 ? (
=======
      {windowWidth > 768 ? (
>>>>>>> 7d18d2c2b81dec585a5d5633da6ce52b2c574c82
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
