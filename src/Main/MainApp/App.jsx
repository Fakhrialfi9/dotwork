import { BrowserRouter as Router } from "react-router-dom";

import MainRoute from "../MainRoute/MainRoute";

function MainApp() {
  return (
    <Router>
      <MainRoute />
    </Router>
  );
}

export default MainApp;
