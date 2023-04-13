import "./index.css";
import Logo from "./Media/polaris.svg";
import Discord from "./Media/discord.svg";
import App from "./Media/app.svg";
import Athena from "./Media/athena.png";
import Pattern from "./Media/bg_pattern.png";

function Landing() {
  return (
    <div className="wrap">
      <header>
        <div className="header-wrap">
          <img src={Logo}></img>

          <div className="social-header">
            <img src={Discord}></img>
            <img src={App}></img>
          </div>
        </div>
      </header>

      <main>
        <div className="landing">
          <h1>The frontier of <span>Auto-Staking</span> <br/> on Zksync Era </h1>
          <h4>Hold & rebase fixed POLARIS rewards</h4>
          <button>PARTICIPATE</button>
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
