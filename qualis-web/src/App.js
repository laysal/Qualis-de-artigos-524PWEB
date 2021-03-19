import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Principal from "./pages/Principal";
import Qualis from "./pages/Qualis";
import QualisFiltrado from "./pages/QualisFiltrado";
import Duvidas from "./pages/Duvidas";

function App() {
  return (
    <div className="container vh-100">
      <Router>
        <Switch>
          <Route component={Principal} path="/" exact />
          <Route component={Qualis} path="/qualis" exact />
          <Route component={QualisFiltrado} path="/qualis/:id" />
          <Route component={Duvidas} path="/duvidas" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
