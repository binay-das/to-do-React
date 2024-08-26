// import {lightTheme} from "../assets/lightTheme.png"

import "./Theme.css";
import { useState } from "react";

let lightUrl = "../assets/lightTheme.png";
let darkUrl = "../assets/darkTheme.png";


export default function Theme () {
    let [theme, setTheme] = useState(false);
    let themeToggle = () => {
        setTheme(!theme);
        console.log(theme);
    }
    return(
        <div className="mode">
            {theme? <img onClick={themeToggle} src={lightUrl} alt="light_mode" /> : <img onClick={themeToggle} src={darkUrl} alt="dark_mode" />}
        </div>
    );
}