import { AppBar, Container, MenuItem, Select, Toolbar, Typography } from "@material-ui/core";
import { createTheme, makeStyles, ThemeProvider } from "@material-ui/core/styles";
import React, {useContext,/*  useState  */} from "react";
import { useNavigate } from "react-router-dom";
import CryptoContext from "../store/crypto-context";
import AuthModal from "./Authentication/AuthModal";
import UserSidebar from "./Authentication/UserSidebar";


const useStyles = makeStyles((theme) => ({
  title: {
    flex: 1,
    color: "gold",
    fontWeight: "bold",      
},
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

const Header = () => {
  const classes = useStyles();
  //const [currency, setCurrency] = useState("USD");
  const navigate = useNavigate();
  const {currency, setCurrency, user} = useContext(CryptoContext);
  
  //console.log(currency, 'check ');

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography variant="h5" className={classes.title} style={{cursor: "pointer"}} onClick={() => navigate('/')}>
              Crypto World
            </Typography>
            {/* <Button color="inherit">Login</Button> */}
            <Select

              variant="outlined"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currency}
              style={{ width: 100, height: 40, marginLeft: 15, color: "gold", fontWeight: "bold" }}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem style={{color: "gold", fontWeight: "bold" }} value={"USD"}>USD</MenuItem>
              <MenuItem style={{color: "gold", fontWeight: "bold"}} value={"INR"}>INR</MenuItem>
            </Select>
            {user ? <UserSidebar /> : <AuthModal />}
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
