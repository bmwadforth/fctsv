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
          <Row col>
            <Tile title="Trading Hours">
              <p>Mon 03:00 pm – 08:00 pm</p>
              <p>Tue 03:00 pm – 08:00 pm</p>
              <p>Wed 03:00 pm – 08:00 pm</p>
              <p>Thu 03:00 pm – 08:00 pm</p>
              <p>Fri 03:00 pm – 08:00 pm</p>
              <p className="strong">Sat 12:00 pm – 02:00 pm (Open Mat)</p>
              <p>Sun Closed</p>
              <br />
              <p>Monday - Friday</p>
              <p>Kids 4+ 4:15pm</p>
              <p>Junior 8+ 5:00pm</p>
              <p>Adults 6:00pm</p>
            </Tile>
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
