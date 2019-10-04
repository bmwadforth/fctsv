import React from "react";
import Row from "./Util/Row";
import Tile from "./Util/Tile";

export default function Contact(props) {
    document.title = "Fight Club | Townsville - Contact";

    function submitContact(e) {
        e.preventDefault();
    }

    return (
        <div className="contact">
            <Row>
                <Tile title="Trading Hours">
                    <p>
                        <span>Monday:</span> 03:00 pm – 08:00 pm
                    </p>
                    <p>
                        <span>Tuesday:</span> 03:00 pm – 08:00 pm
                    </p>
                    <p>
                        <span>Wednesday:</span> 03:00 pm – 08:00 pm
                    </p>
                    <p>
                        <span>Thursday:</span> 03:00 pm – 08:00 pm
                    </p>
                    <p>
                        <span>Friday:</span> 03:00 pm – 08:00 pm
                    </p>
                    <p>
                        <span>Saturday:</span> 12:00 pm – 02:00 pm (Open Mat)
                    </p>
                    <p>
                        <span>Sunday:</span> Closed
                    </p>
                    <br/>
                    <br/>
                    <p>
                        <strong>Monday - Friday</strong>
                    </p>
                    <p>
                        <span>Kids:</span> 4+ 4:15pm
                    </p>
                    <p>
                        <span>Junior:</span> 8+ 5:00pm
                    </p>
                    <p>
                        <span>Adults:</span> 6:00pm
                    </p>
                </Tile>
                <Tile>
                    <form onSubmit={e => submitContact(e)}>
                        <h2>Contact Us</h2>
                        <div className="contact-form">
                            <div className="inquiry-meta">
                                <input type="email" placeholder="Email Address"/>
                                <select>
                                    <option value="register">Register</option>
                                    <option value="inquiry">Inquiry</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <textarea placeholder="Your Inquiry"/>
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </Tile>
            </Row>
        </div>
    );
}
