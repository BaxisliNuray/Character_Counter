import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import'../../src/index.css'

const Navbar = () => {
    //functions
    const [isDark,setIsDark]=useState(false); 

    const trasitionDarkMode=()=>{
        setIsDark(!isDark)

        if(!isDark){
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        }
        else{
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
        }
    }
    
    //jsx
    return (
    <div>
    <nav>
    <div className="nav-container">
    <h1><FontAwesomeIcon icon={faHome} style={{ marginRight: '10px' }} />Character Counter</h1>
    <button onClick={trasitionDarkMode} className={isDark ? 'dark-mode' : 'light-mode'}> <FontAwesomeIcon icon={faMoon} /></button>
    </div>
    </nav>
    </div>
  );
};

export default Navbar;
