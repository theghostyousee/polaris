import "./index.css";
import Logo from "./Media/polaris.svg";
import Discord from "./Media/discord.svg";
import App from "./Media/app.svg";
import Athena from "./Media/athena.png";
import Pattern from "./Media/bg_pattern.png";
import { useNavigate, Route } from 'react-router-dom';

function Landing() {

  function openTwitter() {
    window.open("https://twitter.com/intent/tweet?text=This%20is%20my%20proof%20of%20participation%20for%20%40PaddasFinance%0D%0A%0D%0AThe%20first%20AutoStaking%20protocol%20on%20%23zkSync%F0%9F%94%B1");
  }
  
  function openDiscord() {
    window.open("https://discord.gg/paddasfinance");
  }

  const navigate = useNavigate();


  const handleClick = () => {
    navigate('/app');
  };

  return (
    <div className="wrap">
      <header>
        <div className="header-wrap">
          <img src={Logo}></img>

          <div className="social-header">
            <img onClick={openDiscord} src={Discord}></img>
            <img src={App} onClick={handleClick}></img>
          </div>
        </div>
      </header>

      <main>
        <div className="landing">
          <h1>The frontier of <span>Auto-Staking</span> <br/> on Zksync Era </h1>
          <h4>Hold & rebase fixed PADDAS rewards</h4>
          <button onClick={openTwitter}>PARTICIPATE</button>
        </div>
        <div className="hidden">
          <img src={Athena}></img>
        
        </div>
        <div className="image">
          <div className="interior">
            <img src={Athena}></img>
          </div>
          <div class="borders">
          s
          </div>
        </div>

      </main>
    </div>
  );
}

export default Landing;
