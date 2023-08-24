import React from "react";

import HistoricalDates from "./components/HistoricalDates/HistoricalDates";
import db from "./assets/db";

function App() {
  return (
    <div className="App">
      <HistoricalDates db={db} />
    </div>
  );
}

export default App;
