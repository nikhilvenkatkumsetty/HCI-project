import React from "react";
import "../../../assets/styles/solution-styles/SolutionStyles.scss";
import { categoryData } from "./Mock";
export default function Category() {
  return (
    <div className="category_Component">
      <div className="category_head_wrap">
        <div>Competitive Leaders & Politicians are using</div>
        <div>technologies to get an edge among people.</div>
        <div className="gov_banner_below">
          Datalytix helps make sense of huge conversation, news, articles, post,
          tweets data from people and present in the simplest form so that
          concerned leaders can gauge public outlook better than ever.
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
