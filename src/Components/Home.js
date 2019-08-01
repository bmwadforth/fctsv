import React from "react";
import Tile from "./Util/Tile";
import Row from "./Util/Row";

import Philosophy from "../Assets/Icons/socrates.svg";
import Map from "../Assets/Icons/map.svg";
import Ethics from "../Assets/Icons/ethics.svg";

export default function Home(props) {
  return (
    <div className="home">
      {/*Join Us Button That Takes User To Register Page*/}
      <div className="home-banner" />
      <Row squeeze>
        <Tile title="Our Philosophy" icon={Philosophy}>
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
        <Tile title="Your Journey" icon={Map}>
          <p>
            Your Jiu Jitsu Journey is going to be one the best journey's you
            take in your life. It's a journey of dedication and hard work.
          </p>
        </Tile>
      </Row>
      <Row squeeze>
        <Tile title="Code of Conduct" icon={Ethics}>
          <ul>
            <li>
              Upon entering and leaving the dojo, bow to the instructor and
              towards the centre of the dojo. This is a sign of respect to your
              teachers and to the area you train in.
            </li>
            <li>
              Students should not come in and out of class without permission
              from your instructor, if you are delayed for any reason, please
              wait until the instructor invites you to join the class.
            </li>
            <li>
              Students are expected to participate in seminars, competitions and
              demonstrations with a view to developing their own technique and
              representing Fight Club Jiu Jitsu.
            </li>
            <li>
              Fight Club Jiu Jitsu expects that older or advanced students give
              examples of discipline to new and beginning students in a polite
              and helpful manner.
            </li>
            <li>
              Loud conversations and mobile phones are not permitted in the dojo
              area.
            </li>
            <li>
              Jewelry (piercings, necklaces, rings, watches, etc) is not
              permitted in the dojo.
            </li>
            <li>
              Every student must have their uniform clean and complete with
              official patches from Fight Club Jiu Jitsu. Other uniforms are not
              permitted.
            </li>
            <li>
              Any assistant instructor or senior student that is taking the
              class should be treated with the same respect as the usual
              instructor.
            </li>
            <li>
              Any disrespect with any other instructors, assistant instructors
              or any instructor from any other sport will attract disciplinary
              action.
            </li>
            <li>
              Production of any promotional material of Fight Club Jiu Jitsu
              (shirts, patches, stickers and etc...) is strictly prohibited
              unless authorized by the Fight Club Jiu Jitsu director.
            </li>
            <li>
              Disciplinary action will be taken against those members that do
              not comply with the rules and code of conduct of Fight Club Jiu
              Jitsu.
            </li>
          </ul>
        </Tile>
      </Row>
    </div>
  );
}
