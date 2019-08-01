import React from "react";
import Row from "./Util/Row";
import Tile from "./Util/Tile";

export default function Contact(props) {
  return (
    <div className="contact">
      <Row>
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
      </Row>
    </div>
  );
}
