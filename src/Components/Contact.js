import React from "react";
import Row from "./Util/Row";
import Tile from "./Util/Tile";

export default function Contact(props) {

  function submitContact(e) {
    e.preventDefault();
  }

  return (
    <div className="contact">
      <Row>
        <Tile title="Contact Us">
          <form onSubmit={e => submitContact(e)}>
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
          </form>
        </Tile>
      </Row>
    </div>
  );
}
