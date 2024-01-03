import React from "react";
import Stock from "./Stock";

function StockContainer({ visibleStockList, handleStockMovement }) {
  return (
    <div>
      <h2>Stocks</h2>
      {visibleStockList.map((stock) => (
        <Stock
          key={stock.id}
          stock={stock}
          handleStockMovement={handleStockMovement}
        />
      ))}
    </div>
  );
}

export default StockContainer;
