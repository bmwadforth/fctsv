import React from "react";
import Tile from "./Util/Tile";
import Row from "./Util/Row";
import { ICON } from "./Util/Icon";
import Video from "../Assets/Videos/fctsv.mp4";

export default function Home(props) {
  return (
    <div className="home">
      {/*Join Us Button That Takes User To Register Page*/}
      <div className="home-banner">
        <video autoPlay muted loop>
            <source src={Video} type="video/mp4" />
        </video>
      </div>
      <Row content>
        <Tile title="Our Philosophy" icon={ICON.PHILOSOPHY}>
          <p>
            Fight Club Jiu Jitsu's mission is to provide it's members with the
            highest possible standards in Martial Arts training programs and by
            why of this empower our students to achieve a healthier, happier,
            and more productive life through the martial arts. By creating a
            safe, fun, and supportive environment, Fight Club provides its
            students with everything they need to enjoy fitness and good health,
            confidence, mental strength, discipline, self-defense and lifelong
            friendships.
          </p>
        </Tile>
        <Tile title="Your Journey" icon={ICON.JOURNEY}>
          <p>
            Your journey through jiu jitsu is one that takes courage,
            commitment, determination, and discipline. Fight club jiu-jitsu will
            encourage you to be the best you can be. Fight club will always
            encourage you to work harder and become stronger. Through the hard
            times and the good times, your journey through the world of
            jiu-jitsu is guided by experienced practioners. Never give up.
          </p>
        </Tile>
      </Row>

      <Row content>
        <Tile title="Our Facility" icon={ICON.GYM}>
          <p>
            Our facility is built around providing an atmosphere that motivates
            and encourages practioners to perform their best. We also want to create
            an environment that welcomes people to try jiu-jitsu. High quality
            mats are only the beginning.
          </p>
        </Tile>
        <Tile title="Your Benefit" icon={ICON.COST}>
          <p>
            We're in this game for two things. Jiu-jitsu, and you. None of this
            would be possible without those two components, and we appreciate
            that. Our instructors are constantly seeking new ways to improve how
            jiu-jitsu is delivered. We want you to learn more, improve your
            skills, and enjoy fight club jiu-jitsu.
          </p>
        </Tile>
      </Row>

      <Row content>
        <Tile title="Kids BJJ" icon={null}>
          <p>
            Fight Club Townsville offers kids classes
          </p>
        </Tile>
        <Tile title="Adults BJJ" icon={null}>
          <p>
            We're in this game for two things. Jiu-jitsu, and you. None of this
            would be possible without those two components, and we appreciate
            that. Our instructors are constantly seeking new ways to improve how
            jiu-jitsu is delivered. We want you to learn more, improve your
            skills, and enjoy fight club jiu-jitsu.
          </p>
        </Tile>
      </Row>
    </div>
  );
}
