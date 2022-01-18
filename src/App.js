import { makeStyles } from "@material-ui/core";
import "./App.css";
//import Banner from "./components/Banner/Banner";
import Header from "./components/Header";

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
      
    </div>
  );
}

export default App;
