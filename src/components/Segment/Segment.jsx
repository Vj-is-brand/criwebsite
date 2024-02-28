import React from "react";
import "./Segment.css";

const Segment = ({ data }) => {
  console.log(data);

  return (
    <>
      <div className="segment-container">
        {data.map((items, i) => (
          <div key={i} className="container-items">
            {items}
            <span className="v-bar-color">&#124;</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Segment;
