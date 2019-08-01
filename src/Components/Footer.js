import React from "react";
import Icon from "./Util/Icon";
import IFacebook from "../Assets/Icons/facebook.png";
import IInstagram from "../Assets/Icons/instagram.png";
import Logo from "../Assets/Vectors/logo.png";
import Row from "./Util/Row";
import Tile from "./Util/Tile";

export default function Footer(props) {
  return (
    <div className="footer">
      <footer>
        <div className="stamp">
          <img src={Logo} alt="Fight Club Jiu-Jitsu" />
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto: fightclubtsv@hotmail.com">
              fightclubtsv@hotmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong> 0484 062 027
          </p>
          <p>
            <strong>Address:</strong> 50 Bamford Lane, Townsville - QLD,
            Australia
          </p>
          <br />
          <p className="strong">ABN: 85 937 401 694</p>
          <p className="strong">Fight Club Jiu-Jitsu | Townsville 2019 ©</p>
        </div>
        <div className="social-media">
          <Row>
            <Tile title="Social Media">
              <Icon
                href="https://www.facebook.com/FightClubTownsville/"
                src={IFacebook}
              />
              <Icon
                href="https://www.instagram.com/fightclubtownsville/"
                src={IInstagram}
              />
            </Tile>
          </Row>
        </div>
      </footer>
    </div>
  );
}
