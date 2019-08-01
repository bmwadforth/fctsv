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
        <Row>
          <Tile>
            <img src={Logo} alt="Fight Club Jiu-Jitsu" />
            <br />
            <strong>Fight Club Jiu-Jitsu | Townsville 2019 ©</strong>
          </Tile>
          <Tile title="Details">
            <p>
              <a href="mailto: fightclubtsv@hotmail.com">
                fightclubtsv@hotmail.com
              </a>
            </p>
            <p>0484 062 027</p>
            <p>50 Bamford Lane, Townsville - QLD, Australia</p>
            <p>Abn: 85 937 401 694</p>
          </Tile>
        </Row>
      </footer>
    </div>
  );
}
