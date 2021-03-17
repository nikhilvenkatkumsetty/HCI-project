import React from "react";
import "../../../assets/styles/solution-styles/SolutionStyles.scss";
import { categoryData } from "./Mock";
export default function Category() {
  return (
    <div className="category_Component">
      <div className="category_head_wrap">
        <div>Retail is omni-channel.</div>
        <div>See the complete picture and stay ahead.</div>
        <div>
          Datalytix helps retail chains and brands to gain deep understanding of
          market dynamics, consumer behavior, preferences, spendings and
          response to the business actions.
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
