import React from "react";
import "../../../assets/styles/solution-styles/SolutionStyles.scss";
import { categoryData } from "./Mock";
export default function Category() {
  return (
    <div className="category_Component">
      <div className="category_head_wrap">
        <div>Media is reinventing itself with new ways</div>
        <div>to capture important story.</div>
        <div>
          Datalytix uses millions of signals, historic and real time trends from
          vast internet to provide solutions for media and news agencies.
          It helps them be faster, focused and efficient to their audience.
        </div>
      </div>
      <div className="row category_data_wrap">
        {categoryData.map((item, i) => {
          return (
            <div className="col-lg-2 col-md-2 col-sm-6 col-6">
              <div>
                <img src={item.img} alt="category" />
              </div>
              <div>{item.title}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
