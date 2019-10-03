import React from "react";
import Row from "./Util/Row";
import Tile from "./Util/Tile";

export default function About(props) {
    return (
        <div className="about">
            <Row col squeeze>
                <Tile title="Fight Club Townsville">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </Tile>
                <Tile title="Code of Conduct">
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
            <Row squeeze>
                <Tile title="Trading Hours">
                    <p>
                        <strong>Mon:</strong> 03:00 pm – 08:00 pm
                    </p>
                    <p>
                        <strong>Tue:</strong> 03:00 pm – 08:00 pm
                    </p>
                    <p>
                        <strong>Wed:</strong> 03:00 pm – 08:00 pm
                    </p>
                    <p>
                        <strong>Thu:</strong> 03:00 pm – 08:00 pm
                    </p>
                    <p>
                        <strong>Fri:</strong> 03:00 pm – 08:00 pm
                    </p>
                    <p>
                        <strong>Sat:</strong> 12:00 pm – 02:00 pm (Open Mat)
                    </p>
                    <p>
                        <strong>Sun:</strong> Closed
                    </p>
                </Tile>
                <Tile title="Training Configuration">
                    <p>
                        <strong>Monday - Friday</strong>
                    </p>
                    <p>
                        <strong>Kids:</strong> 4+ 4:15pm
                    </p>
                    <p>
                        <strong>Junior:</strong> 8+ 5:00pm
                    </p>
                    <p>
                        <strong>Adults:</strong> 6:00pm
                    </p>
                </Tile>
            </Row>
        </div>
    );
}
