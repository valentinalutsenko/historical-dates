import React from "react";

import HistoricalDates from "./components/HistoricalDates";
import dataset from "./assets/dataset";

function App() {
  return (
    <div className="App">
      <HistoricalDates dataset={dataset} />
    </div>
  );
}

export default App;
