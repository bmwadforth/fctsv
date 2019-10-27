import React, {useState, useRef} from "react";
import Tile from "./Util/Tile";
import Row from "./Util/Row";
import {ICON} from "./Util/Icon";
import Video from "../Assets/Videos/fctsv.mp4";
import Button from "./Util/Button";
import {Redirect, Link} from "react-router-dom";
import {CLIENT_ROUTES} from "../constants";

export default function Home(props) {
    const [register, setRegister] = useState(false);
    const video = useRef(null);

    if (register)
        return <Redirect to={CLIENT_ROUTES.CONTACT}/>;

    return (
        <div className="home">
            <div className="home-banner">
                <div className="register">
                    <div className="cta">
                        <h1 className="title">A friendly, easygoing Brazilian Jiu-jitsu club</h1>
                        <h2 className="subtitle">Adults, womens and kids classes available</h2>
                        <Button title="Register Now" size="large" status="primary" onClick={() => setRegister(true)}/>
                        <a href="#read-more"><p className="read-more-link">Find out about our philosophy and core values</p></a>
                    </div>
                </div>

                <video autoPlay muted loop ref={video} onPlay={() => video.current.playbackRate = 0.5}>
                    <source src={Video} type="video/mp4"/>
                </video>
            </div>
            <Row content>
                <div id="read-more"/>
                <Tile title="Our Philosophy" icon={ICON.PHILOSOPHY}>
                    <p>
                        Fight Club Jiu-Jitsu's mission is to provide it's members with the highest possible standards in Martial Arts training programs.
                    </p>
                    <p>
                        Empowering our students to achieve a healthier, happier, and more productive life through the martial arts.
                    </p>
                    <p>
                        By creating a safe, fun, and supportive environment, Fight Club provides its
                        students with everything they need:
                    </p>
                    <ul>
                        <li>to enjoy fitness and good health</li>
                        <li>have self-confidence and mental strength</li>
                        <li>be disciplined and defend themselves</li>
                        <li>create lifelong friendships.</li>
                    </ul>
                </Tile>
                <Tile title="Your Journey" icon={ICON.JOURNEY}>
                    <p>Your journey through Jiu-jitsu is one that takes:</p>
                    <ul>
                        <li>courage</li>
                        <li>commitment</li>
                        <li>determination</li>
                        <li>discipline</li>
                    </ul>
                    <p>
                        Through the hard times and the good times, your journey through the world of
                        Jiu-jitsu is guided by experienced practioners. <strong>Never give up.</strong>
                    </p>
                    <p>
                        Fight club Jiu-jitsu will encourage you to be the best you can be, will always
                        encourage you to work harder and become stronger.
                    </p>
                </Tile>
            </Row>

            <Row content>
                <Tile title="Our Facility" icon={ICON.GYM}>
                    <p>
                        Our facility is built around providing an atmosphere that motivates
                        and encourages practitioners to perform their best.
                    </p>
                    <p>
                        We also want to create an environment that welcomes people to try jiu-jitsu.
                        High quality mats are only the beginning.
                    </p>
                    <iframe title="fight club location google maps" width="400" height="250" frameBorder="0" style={{border: "0"}}
                            src="https://www.google.com/maps/embed/v1/place?q=fight%20club%20townsville&key=AIzaSyAOyxK7GljRqyuVqKhfgNq2F3ccOplK2Ko"
                            allowFullScreen />

                </Tile>
                <Tile title="Your Benefit" icon={ICON.COST}>
                    <p>
                        We're in this game for two things. Jiu-jitsu, and you. None of this
                        would be possible without those two components, and we appreciate
                        that.
                    </p>
                    <p>
                        Our instructors are constantly seeking new ways to improve how
                        jiu-jitsu is delivered. We want you to learn more, improve your
                        skills, and enjoy fight club jiu-jitsu.
                    </p>
                    <Link to={CLIENT_ROUTES.INSTRUCTORS}><p className="read-more-link">Meet our instructors</p></Link>

                    <Button title="Register Now" size="large" status="primary" onClick={() => setRegister(true)}/>

                </Tile>
            </Row>
        </div>
    );
}
