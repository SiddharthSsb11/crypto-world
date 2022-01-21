import React, {useState, useEffect} from 'react';
import CryptoContext from './crypto-context';
import axios from "axios";
import { CoinList } from "../config/api";

const CryptoProvider = (props) => {
    
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currency, setCurrency] = useState("INR");
    const [symbol, setSymbol] = useState("₹");

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
    }, [currency]);
    

    return (
        <div>
            <CryptoContext.Provider value = {{currency, symbol, coins, loading, fetchCoins, setCurrency}}> 
                {props.children}
            </CryptoContext.Provider>        
        </div>
    )
}

export default CryptoProvider
