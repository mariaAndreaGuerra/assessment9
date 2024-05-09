import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Menu from "./components/Menu";
import SnackDetails from "./components/SnackDetails";
import NotFoundPage from "./pages/NotFoundPage";
import SnackOrBoozeApi from "./api/SnackOrBoozeApi";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);

  useEffect(() => {
    async function getSnacks() {
      try {
        const snacksData = await SnackOrBoozeApi.getSnacks();
        setSnacks(snacksData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching snacks:", error);
        setIsLoading(false);
      }
    }
    getSnacks();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} />
            </Route>
            <Route exact path="/snacks">
              <Menu items={snacks} title="Snacks" />
            </Route>
            <Route path="/snacks/:id">
              <SnackDetails items={snacks} cantFind="/snacks" />
            </Route>
            {/* Add routes for drinks */}
            <Route exact path="/drinks">
              <Menu items={drinks} title="Drinks" />
            </Route>
            <Route path="/drinks/:id">
              <DrinkDetails items={drinks} cantFind="/drinks" />
            </Route>
            <Route component={NotFoundPage} />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
