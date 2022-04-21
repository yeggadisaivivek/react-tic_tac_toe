import React,{useContext} from "react";
import {Button} from "reactstrap";
import ThemeContext from "../context/ThemeContext";

const ChangeTheme = () => {

    const theme = useContext(ThemeContext)[0];
  
  //const currectTheme = AppTheme[theme];
  const [themeMode, setThemeMode] = useContext(ThemeContext);
    return(
        <Button variant="primary"  onClick={() => {
            setThemeMode(themeMode === "light" ? "dark" : "light");
            console.log("themeMode: ",themeMode)
          }}>Primary</Button>
    )
}

export default ChangeTheme;