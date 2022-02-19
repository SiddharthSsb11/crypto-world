import React, {useState, useEffect} from 'react';
import CryptoContext from './crypto-context';
import { onAuthStateChanged } from "firebase/auth"; //from fb 
import { auth, db } from "../firebase";
import axios from "axios";
import { CoinList } from "../config/api";
import { onSnapshot, doc } from "firebase/firestore";

//import { ErrorFactory } from '@firebase/util';

const CryptoProvider = (props) => {
    
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currency, setCurrency] = useState("INR");
    const [symbol, setSymbol] = useState("₹");

    const [user, setUser] = useState(null);
    const [alert, setAlert] = useState({
        open: false,
        message: "",
        type: "success",
    });
    const [watchlist, setWatchlist] = useState([]);

    useEffect(() => {
        if (user) {
          const coinRef = doc(db, "watchlist", user?.uid); //collection reference db table //doc fb
          var unsubscribe = onSnapshot(coinRef, (coin) => { //cb fb //var to avoiding blockscope
            //onSnaphsot checks of our db is updated or not wrt to the reference we created
            if (coin.exists()) {
              //console.log(coin.data().coins, coin.data()); //coin.data()--data in userId in db //[btc, eth],{[]}
              
              setWatchlist(coin.data().coins);
            } else {
              console.log("No Items in Watchlist");
            }
          });
    
          return () => {
            unsubscribe();
          };
        }
    }, [user]);


    useEffect(() => {
        onAuthStateChanged(auth, (user) => { //CB arg inbuilt from fb
          if (user) setUser(user);
          else setUser(null);
          //console.log('user check uid', user);
        });
        
    }, []);

    const fetchCoins = async () => {
        setLoading(true);
        const { data } = await axios.get(CoinList(currency));
        //console.log(data);
    
        setCoins(data);
        setLoading(false);
    };


    useEffect(() => {
        if (currency === "INR") setSymbol("₹");
        else if (currency === "USD") setSymbol("$");

        fetchCoins();
     // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currency]);
    

    return (
        <div>
            <CryptoContext.Provider value = {{
                currency, symbol, coins, loading, alert, user, watchlist, setAlert, setCurrency
            }}> 
                {props.children}
            </CryptoContext.Provider>        
        </div>
    )
}

export default CryptoProvider
