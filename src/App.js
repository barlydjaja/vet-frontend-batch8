import Home from "./pages/Home";
import { Switch, Route, withRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
