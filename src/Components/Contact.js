import React from "react";
import Row from "./Util/Row";
import Tile from "./Util/Tile";

export default function Contact(props) {
  return (
    <div className="contact">
      <Row>
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
