import Home from "./pages/Home";
import { Switch, Route, withRouter } from "react-router-dom";
import SearchClinic from "./pages/SearchClinic";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/klinik">
          <SearchClinic />
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
