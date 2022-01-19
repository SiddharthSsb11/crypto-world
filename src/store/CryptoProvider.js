import React, {useState, useEffect} from 'react';
import CryptoContext from './crypto-context';

const CryptoProvider = (props) => {

    const [currency, setCurrency] = useState("INR");
    const [symbol, setSymbol] = useState("₹");

    useEffect(() => {
        if (currency === "INR") setSymbol("₹");
        else if (currency === "USD") setSymbol("$");
    }, [currency]);
    

    return (
        <div>
            <CryptoContext.Provider value = {{currency, symbol, setCurrency}}> 
                {props.children}
            </CryptoContext.Provider>        
        </div>
    )
}

export default CryptoProvider
