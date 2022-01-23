import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import "./App.css";
//import Banner from "./components/Banner/Banner";
import Header from "./components/Header";
//import Banner from "./components/Banner/Banner";
/* import HomePage from "./Pages/HomePage";
import CoinPage from "./Pages/CoinPage"; */
import Alert from "./components/Alert";
import LoadingSpinner from "./components/Spinner/LoadingSpinner";


const HomePage = React.lazy(() => import("./Pages/HomePage"));
const CoinPage = React.lazy(() => import("./Pages/CoinPage"));

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.App}>
        <Header />
        <Suspense fallback={<div className="center"> {LoadingSpinner} </div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/coins/:id" element={<CoinPage />} />
          </Routes>
        </Suspense>
      </div>
      <Alert />
    </React.Fragment>
  );
};

export default App;
