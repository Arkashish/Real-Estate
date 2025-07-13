import React, { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Value.css";
import data from "../../utils/accordion";

const Value = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // collapse if already open
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* Left Side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./main3.jpg" alt="main visual" />
          </div>
        </div>

        {/* Right Side */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value we give to you</span>
          <span className="secondaryText">
            We always help you to find the right property. <br />
            The best service you can get is from us — buying a property that will
            grow in value.
          </span>

          <div className="accordion">
            {data.map((item, index) => {
              const isOpen = activeIndex === index;
              return (
                <div
                  key={index}
                  className={`accordionItem ${isOpen ? "expanded" : "collapsed"}`}
                >
                  <div
                    className="flexCenter accordionButton"
                    onClick={() => toggleAccordion(index)}
                  >
                    <div className="flexCenter icon">{item.icon}</div>
                    <span className="primaryText">{item.heading}</span>
                    <div
                      className={`flexCenter icon arrow-icon ${
                        isOpen ? "rotate" : ""
                      }`}
                    >
                      <MdOutlineArrowDropDown size={20} />
                    </div>
                  </div>
                  {isOpen && (
                    <div className="accordionPanel">
                      <p className="secondaryText">{item.detail}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Value;
