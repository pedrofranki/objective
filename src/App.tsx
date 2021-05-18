import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CharacterList from "./pages/CharacterList";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route component={CharacterList} path="/" exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
