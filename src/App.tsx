import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CharacterList from "./pages/CharacterList";
import CharacterDetails from './pages/CharacterDetails'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route component={CharacterList} path="/" exact />
          <Route component={CharacterDetails} path="/character/:id" exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
