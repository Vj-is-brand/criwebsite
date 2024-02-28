import React from "react";
import "./Home.css";
import Segment from "../../components/Segment/Segment";
import imageSrc from "../../Images/1.png";
import imageSrc2 from "../../Images/2.png";
import imageSrc3 from "../../Images/3.png";

const Home = () => {
    const windowWidth = window.innerWidth;
console.log("Window width:", windowWidth);
  return (
    <>
      <div className="container">
        <div className="container-box">
          <img className="image_left" src={imageSrc} alt="Image" />
          <div className="container-text-content">
            <p>
              <b>
                {" "}
                C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018
                for the 4th time.
              </b>
            </p>
              <ul>
                <li>
                  C.R.I.'s energy efficient products are well recognized by
                  various Government Institutions, as trustworthy products for
                  various projects across the globe to save energy.
                </li>
                <li>
                  {" "}
                  C.R.I. is the highest contributor in the country for the
                  projects of EESL (Energy Efficiency Services Limited) to
                  replace the old inefficient pumps with 5 Star rated energy
                  efficient smart pumps with IoT enabled control panel.{" "}
                </li>
              </ul>
            <img className="image_right" src={imageSrc2} alt="AwardCeremony" />
            <p>
              Government of India has awarded the{" "}
              <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj,
              Joint Managing Director of C.R.I. Group received the award from
              Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar
              Singh, Honorable Minister of State.
            </p>
          </div>
        </div>
        <p className="description">
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.{" "}
        </p>
        <img src={imageSrc3} alt="tools and pumps" className="image_bottom" />
        <p className="items-name">
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
        <div className="horizontal-line"></div>
        <p className="pTitle">
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </p>
        <Segment
          data={[
            "CHEMICALS & PROCESS",
            "POWER WATER & WASTE WATER",
            "OILS & GAS",
            "PHARMA",
            "SUGARS & DISTILLERIES",
            "PAPER & PULP",
            "MARINE & DEFENCE",
            "METAL & MINING",
            "FOOD & BEVERAGE",
            "PETROCHEMICAL & REFINERIES",
            "SOLAR",
            "BUILDING",
            "HVAC ",
            "FIRE FIGHTING ",
            "AGRICULTURE & RESIDENTIAL",
          ]}
        />
      </div>
    </>
  );
};

export default Home;
