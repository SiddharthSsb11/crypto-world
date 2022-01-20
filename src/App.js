import React from 'react'
import { Routes, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core";
import "./App.css";
//import Banner from "./components/Banner/Banner";
import Header from "./components/Header";
//import Banner from "./components/Banner/Banner";
import HomePage from "./Pages/HomePage";
import CoinPage from "./Pages/CoinPage";

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

const App= () => {

  const classes = useStyles();

  return (
    <div className={classes.App}>
      <Header />
      <Routes>
        <Route path="/" element = {<HomePage />} />
        <Route path="/coins/:id" element = {<CoinPage />} />
      </Routes>  
    </div>
  );
}

export default App;
