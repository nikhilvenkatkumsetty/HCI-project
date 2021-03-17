import React from "react";
import "../../../assets/styles/solution-styles/SolutionStyles.scss";
import { categoryData } from "./Mock";
export default function Category() {
  return (
    <div className="category_Component">
      <div className="category_head_wrap">
        <div>Many unconventional sources are making</div>
        <div>it possible to measure the immeasurable.</div>
        <div>
          Datalytix helps for the advertising stems from the wide amount of
          multi-channel data collection and AI led inferences. Every dollar is
          used more judiciously!
        </div>
      </div>
      <div className="row category_data_wrap">
        {categoryData.map((item, i) => {
          return (
            <div className="col-lg-3 col-md-3 col-sm-6 col-6">
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