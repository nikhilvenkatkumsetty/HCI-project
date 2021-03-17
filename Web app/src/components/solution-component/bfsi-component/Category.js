import React from "react";
import "../../../assets/styles/solution-styles/SolutionStyles.scss";
import { categoryData } from "./Mock";
export default function Category() {
  return (
    <div className="category_Component">
      <div className="category_head_wrap">
        <div>Allocation of capital is more important and</div>
        <div>data driven than ever.</div>
        <div>
          Datalytix enables the easy access to signals from the noise,
          productize undiscovered data assets which helps the stakeholder to
          take actionable intelligence.
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
