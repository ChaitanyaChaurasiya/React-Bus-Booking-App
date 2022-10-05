import React from "react";
import { list } from "../../data/Data";

const RecommendedCard = () => {
  return (
    <>
      <div className="content grid3 mtop">
        {list.map((val, index) => {
          const { cover, category, location, name, price, type } = val;
          return (
            <div className="box shadow" key={index}>
              <div className="img">
                <img src={cover} alt="" />
              </div>
              <div className="text">
                <div className="category flex">
                  <span
                    style={{
                      background: "#25b5791a",
                      color: "#25b579",
                    }}
                  >
                    {category}
                  </span>
                </div>
                <h4>{name}</h4>
                <p>{location}</p>
              </div>
              <div className="button flex">
                <div>
                  <button className="btnPrice">{price}</button>
                </div>
                <span>{type}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RecommendedCard;
