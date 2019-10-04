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
                <Tile title="Trading Hours">
                    <table>
                        <tbody>
                        <tr>
                            <td>Monday:</td>
                            <td>03:00 pm – 08:00 pm</td>
                        </tr>
                        <tr>
                            <td>Tuesday:</td>
                            <td>03:00 pm – 08:00 pm</td>
                        </tr>
                        <tr>
                            <td>Wednesday:</td>
                            <td>03:00 pm – 08:00 pm</td>
                        </tr>
                        <tr>
                            <td>Thursday:</td>
                            <td>03:00 pm – 08:00 pm</td>
                        </tr>
                        <tr>
                            <td>Friday:</td>
                            <td>03:00 pm – 08:00 pm</td>
                        </tr>
                        <tr>
                            <td>Saturday:</td>
                            <td>12:00 pm – 02:00 pm (Open Mat)</td>
                        </tr>
                        <tr>
                            <td>Sunday:</td>
                            <td>Closed</td>
                        </tr>
                        </tbody>
                    </table>
                    <table>
                        <tbody>
                        <tr>
                            <td colSpan={2} >Monday - Friday</td>
                        </tr>
                        <tr>
                            <td>Kids:</td>
                            <td>4+ 4:15pm</td>
                        </tr>
                        <tr>
                            <td>Junior:</td>
                            <td>8+ 5:00pm</td>
                        </tr>
                        <tr>
                            <td>Adults:</td>
                            <td>6:00pm</td>
                        </tr>
                        </tbody>
                    </table>
                </Tile>
            </Row>
        </div>
    );
}
