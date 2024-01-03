import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolioList, handleStockMovement }) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        portfolioList.map((stock) => (
          <Stock
            key={stock.id}
            stock={stock}
            handleStockMovement={handleStockMovement}
          />
        ))
      }
    </div>
  );
}

export default PortfolioContainer;
