import React from "react";

import HistoricalDates from "./components/HistoricalDates/HistoricalDates";
import db from "./assets/db";

import "./assets/styles/resetStyles.scss";
import "./assets/styles/fonts.scss";

function App() {
  return (
    <div className="App">
      <HistoricalDates db={db} />
    </div>
  );
}

export default App;
