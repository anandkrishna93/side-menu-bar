import React, { useState } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

const colorList = [{
  id: 1,
  color: 'red',
  date: 'red'
}, {
  id: 2,
  color: 'black',
  date: 'black'
},{
  id: 3,
  color: 'blue',
  date: 'blue'
},{
  id: 4,
  color: 'gray',
  date: 'gray'
}]

function SlashPanel() {
  const [open, setOpen] = useState(false);

  const showHide = (e) => {
    e.preventDefault();
    setOpen(!open);
  }

  return (
    <div className="slash-panel">
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            <i className="bi bi-chevron-down"></i> Screen Details
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="0">
            <Card.Body>Body content for panel 1</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      <Accordion defaultActiveKey="1">
        <Card>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            <i className="bi bi-chevron-down"></i> Assets
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <div className="squer">1</div>
              <div className="squer">2</div>
              <div className="squer">3</div>
              <div className="squer">4</div>
              <div className="squer">5</div>
              <div className="squer">6</div>
              <div className="squer">7</div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      <Accordion defaultActiveKey="1">
        <Card>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            <i className="bi bi-chevron-down"></i> Colors
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="1">
            <Card.Body>
              {
                colorList.map(_id => <div className="squer" key={_id.id} style={{ background: _id.color}}></div>)
              }
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      <Accordion defaultActiveKey="1">
        <Card>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            <i className="bi bi-chevron-down"></i> Character Styles
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="1">
            <Card.Body>Body content for panel 1</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      <Accordion defaultActiveKey="1">
        <Card>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            <i className="bi bi-chevron-down"></i> Interactions
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="1">
            <Card.Body>Body content for panel 1</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

export default SlashPanel;
