import React,{useContext, useState} from "react";
import App from "./App";
import ThemeContext from "./context/ThemeContext";

const AppWrapper = () => {

    const themeHook = useState("light")
    return(
        <ThemeContext.Provider value={themeHook} >
            <App />
        </ThemeContext.Provider>
    )
}

export default AppWrapper;