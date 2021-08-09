import Reacr from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

//import components
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <LandingPage />
    </div>
  );
}

export default App;
