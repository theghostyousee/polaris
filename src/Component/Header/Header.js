import React from "react";
import "./Header.css";
import Logo from "../../Media/polaris.svg";
import Discord from "../../Media/discord.svg";
import App from "../../Media/app.svg";
import Athena from "../../Media/athena.png";
import { useNavigate, Route } from 'react-router-dom';
function Header() {

    const navigate = useNavigate();


    const handleClick = () => {
      navigate('/');
    };
    
  return (
    <header>
      <div className="header-wrap">
        <img onClick={handleClick} src={Logo}></img>

        <div className="social-header">
          <img src={Discord}></img>
          <button>Connect Wallet</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
