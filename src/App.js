import Home from "./components/Home";
import Create from "./components/Create";
import Edit from "./components/Edit";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import { useDispatch } from "react-redux";

function App() {
  return (
    <div className="App ">
      <Router>
        <Header />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/create">
          <Create />
        </Route>
        <Route path="/edit">
          <Edit />
        </Route>
      </Router>
    </div>
  );
}

export default App;
