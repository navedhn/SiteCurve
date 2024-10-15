<<<<<<< HEAD
import React, { useState, useEffect } from "react";
=======
import React, { useState } from "react";
>>>>>>> 7d18d2c2b81dec585a5d5633da6ce52b2c574c82

// assets
import frame_1 from "../../../assets/tab_1_fram_1.png";
import frame_2 from "../../../assets/tab_1_fram_2.png";
import frame_3 from "../../../assets/frame_3.png";
import frame_4 from "../../../assets/frame_4.png";
import frame_5 from "../../../assets/portfolio_1.png";
import frame_6 from "../../../assets/portfolio_2.png";
<<<<<<< HEAD
import one from "../../../assets/tabsIcons/1.svg";
import two from "../../../assets/tabsIcons/2.svg";
import three from "../../../assets/tabsIcons/3.svg";
import four from "../../../assets/tabsIcons/4.svg";
import five from "../../../assets/tabsIcons/5.svg";
import oneColor from "../../../assets/tabsIcons/1-color.svg";
import twoColor from "../../../assets/tabsIcons/2-color.svg";
import threeColor from "../../../assets/tabsIcons/3-color.svg";
import fourColor from "../../../assets/tabsIcons/4-color.svg";
import fiveColor from "../../../assets/tabsIcons/color-5.svg";

import { BsCheckCircle } from "react-icons/bs";
import { ReactSVG } from "react-svg";
=======
import { BsCheckCircle } from "react-icons/bs";
>>>>>>> 7d18d2c2b81dec585a5d5633da6ce52b2c574c82

const Tabs = () => {
  const tabsData = [
    {
      id: 1,
      buttonName: "Winner & Loser",
      heading: "See which websites are winning and losing rank on your keywords",
      frame_1: frame_1,
      frame_2: frame_2,
      li_1: "View the biggest rank movers over custom time periods",
      li_2: "Sort by share of voice, curve, volatility scores",
      li_3: "Analyze shifts in specific categories and niches",
<<<<<<< HEAD
      icon: one,
      colorIcon: oneColor,
=======
>>>>>>> 7d18d2c2b81dec585a5d5633da6ce52b2c574c82
    },
    {
      id: 2,
      buttonName: "Leaderboards",
      heading: "See the market leaders for your niche, website type, and business model.",
      frame_1: frame_1,
      frame_2: frame_2,
      li_1: "View top performers by category, niche, site type",
      li_2: "Compare leaders across different SEO metrics",
      li_3: "Identify dominant websites for your specific landscape",
<<<<<<< HEAD
      icon: two,
      colorIcon: twoColor,
=======
>>>>>>> 7d18d2c2b81dec585a5d5633da6ce52b2c574c82
    },
    {
      id: 3,
      buttonName: "New Entrants",
      heading: "Track new entrants and emerging competitors in real-time",
      frame_1: frame_1,
      frame_2: frame_3,
      li_1: "Discover emerging competitors entering your SEO space",
      li_2: "Analyze how new entrants impact your rankings",
      li_3: "See which niches are becoming increasingly competitive",
<<<<<<< HEAD
      icon: three,
      colorIcon: threeColor,
=======
>>>>>>> 7d18d2c2b81dec585a5d5633da6ce52b2c574c82
    },
    {
      id: 4,
      buttonName: "UniqueSEO Metrics",
      heading: "Leverage unique SEO metrics to separate signal from noise",
      frame_1: frame_4,
      frame_2: frame_4,
      frame_3: frame_4,
      li_1: "Share of voice to track market share",
      li_2: "Volatility score to measure rank shifts",
      li_3: "Google score to evaluate Google presence",
      li_4: "Curve score to highlight outperformers",
<<<<<<< HEAD
      icon: four,
      colorIcon: fourColor,
=======
>>>>>>> 7d18d2c2b81dec585a5d5633da6ce52b2c574c82
    },
    {
      id: 5,
      buttonName: "Portfolio",
      heading: "Create portfolios to monitor websites, categories, and more",
      frame_1: frame_6,
      frame_2: frame_5,
      li_1: "Monitor domains or individual URLs in one place",
      li_2: "Track search visibility across entire categories",
      li_3: "Understand how rankings shift across locations",
<<<<<<< HEAD
      icon: five,
      colorIcon: fiveColor,
=======
>>>>>>> 7d18d2c2b81dec585a5d5633da6ce52b2c574c82
    },
  ];

  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (id) => {
    setActiveTab(id);
  };

  const activeTabData = tabsData.find((tab) => tab.id === activeTab);

<<<<<<< HEAD
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

=======
>>>>>>> 7d18d2c2b81dec585a5d5633da6ce52b2c574c82
  return (
    <section className="tab-section">
      <h2>
        Gain an advantage over your competitors
<<<<<<< HEAD
        {windowWidth > 767 && <br />} with next-level SEO intelligence
=======
        {window.innerWidth > 768 && <br />} with next-level SEO intelligence
>>>>>>> 7d18d2c2b81dec585a5d5633da6ce52b2c574c82
      </h2>
      <p className="mt-5">Click the tabs below to see what makes SiteCurve standout from other SEO tools.</p>
      <div className="custom-tab">
        {tabsData &&
          tabsData.map((item) => (
            <button
              key={item.id}
              className={`pill-tabs-btn ${item.id === activeTab ? "active" : ""}`} // Add 'active' class if this is the active tab
              onClick={() => handleTabClick(item.id)} // Update the active tab on click
            >
<<<<<<< HEAD
              {item.id === activeTab ? <ReactSVG src={item.colorIcon} /> : <ReactSVG src={item.icon} />} {item.buttonName}
=======
              {item.buttonName}
>>>>>>> 7d18d2c2b81dec585a5d5633da6ce52b2c574c82
            </button>
          ))}
      </div>
      {activeTabData && (
        <div className="grid grid-cols-12 gap-4 custom-tab-section">
          <div className="col-span-12 lg:col-span-5 ctm-middle">
            <h3>{activeTabData.heading}</h3>
            <ul className="mt-5">
              {Object.keys(activeTabData)
                .filter((key) => key.startsWith("li_"))
                .map((liKey) => (
                  <li className="mt-3 flex gap-md-3 gap-2" key={liKey}>
                    <div>
                      <BsCheckCircle size={20} />
                    </div>

                    {activeTabData[liKey]}
                  </li>
                ))}
            </ul>
<<<<<<< HEAD
            <button className="primary-btn my-3">{windowWidth > 768 ? "Get Started" : "Create Landscape"}</button>
            {windowWidth > 767 ? (
              ""
            ) : (
              <p id="mobile-line">
                ...or <span>discover landscapes</span>
              </p>
            )}
          </div>

=======
            <button className="primary-btn my-3">{window.innerWidth > 768 ? "Get Started" : "Create Landscapes"}</button>
          </div>
>>>>>>> 7d18d2c2b81dec585a5d5633da6ce52b2c574c82
          <div className={`col-span-12 lg:col-span-7 ctm-middle ctm-middle-2 `}>
            <img src={activeTabData.frame_1} alt="Frame 1" className={`${activeTabData.id === 1 ? "frame-1" : activeTabData.id === 2 ? "obj-frame-1" : activeTabData.id === 3 ? "obj-frame-1" : activeTabData.id === 4 ? "obj-frame-2" : activeTabData.id === 5 ? "obj-frame-1 z-0 kks" : ""}`} />
            <img src={activeTabData.frame_2} alt="Frame 2" className={`${activeTabData.id === 1 ? "" : activeTabData.id === 2 ? "frame-2" : activeTabData.id === 3 ? "frame-3" : activeTabData.id === 4 ? "frame-4" : activeTabData.id === 5 ? "frame-3 z-50 mt-20" : ""}`} />
            {activeTabData.frame_3 && <img src={activeTabData.frame_3} alt="Frame 2" className={`${activeTabData.id === 1 ? "" : activeTabData.id === 2 ? "frame-2" : activeTabData.id === 4 ? "frame-5" : activeTabData.id === 5 ? "frame-3" : ""}`} />}
          </div>
        </div>
      )}
    </section>
  );
};

export default Tabs;
