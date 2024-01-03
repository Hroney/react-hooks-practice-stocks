import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stockList, setStockList] = useState([])
  const [visibleStockList, setVisibleStockList] = useState([])
  const [portfolioList, setPortfolioList] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((r) => r.json())
      .then((stocks) => {
        setStockList(stocks)
        setVisibleStockList(stocks)
      })
  }, [])

  function handleStockMovement(stockToFilter) {
    if (visibleStockList.includes(stockToFilter)) {
      const filteredStock = stockList.filter((stock) => {
        return stock.id !== stockToFilter.id
      })
      const filteredVisibleStock = visibleStockList.filter((stock) => {
        return stock.id !== stockToFilter.id
      })
      setPortfolioList([...portfolioList, stockToFilter])
      setVisibleStockList(filteredVisibleStock)
      setStockList(filteredStock)
    } else {
      const filteredStock = portfolioList.filter((stock) => {
        return stock.id !== stockToFilter.id
      })
      setPortfolioList(filteredStock)
      setVisibleStockList([...visibleStockList, stockToFilter])
      setStockList([...stockList, stockToFilter])
    }
  }

  function sortByName() {
    const alphaeticalList = [...visibleStockList].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      if (nameA > nameB) {
        return 1;
      }
      if (nameA < nameB) {
        return -1;
      }
      return 0;
    })
    setVisibleStockList(alphaeticalList)
  }

  function sortByPrice() {
    const priceList = [...visibleStockList].sort((a, b) => {
      return a.price - b.price;
    })
    setVisibleStockList(priceList)
  }


  function filterByType(type) {
    const filteredList = stockList.filter((stock) => stock.type === type)
    console.log(filteredList)
    setVisibleStockList(filteredList)
    console.log(stockList)
  }

  return (
    <div>
      <SearchBar
        sortByName={sortByName}
        sortByPrice={sortByPrice}
        filterByType={filterByType}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer
            visibleStockList={visibleStockList}
            handleStockMovement={handleStockMovement}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer
            portfolioList={portfolioList}
            handleStockMovement={handleStockMovement}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
