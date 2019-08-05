import React from "react";
import Tile from "./Util/Tile";
import Row from "./Util/Row";
import { ICON } from "./Util/Icon";

export default function Home(props) {
  return (
    <div className="home">
      {/*Join Us Button That Takes User To Register Page*/}
      <div className="home-banner" />
      <Row content>
        <Tile title="Our Philosophy" icon={ICON.PHILOSOPHY}>
          <p>
            Fight Club Jiu Jitsu's mission is to provide it's members with the
            highest possible standards in Martial Arts training programs and by
            why of this empower our students to achieve a healthier, happier,
            and more productive life through the martial arts. By creating a
            safe, fun, and supportive environment, Fight Club provides it's
            students with everything they need to enjoy fitness and good health,
            confidence, mental strength, discipline, self-defense and lifelong
            friendships
          </p>
        </Tile>
        <Tile title="Your Journey" icon={ICON.JOURNEY}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Tile>
      </Row>

      <Row content>
      <Tile title="Our Facility" icon={ICON.GYM}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Tile>
        <Tile title="Your Benefit" icon={ICON.COST}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Tile>
      </Row>
    </div>
  );
}
