import React from "react";
import { FaTimesCircle } from "react-icons/fa";
//!https://react-icons.github.io/react-icons
const GorevleriGoster = () => {


  return (
    <div>
      {[].map((x) => {

        return (
          <div
          
          
          >
            <h3>
              {}
              <FaTimesCircle
                style={{ color: "red" }}
               
              />
            </h3>
            <h6>{}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default GorevleriGoster;
