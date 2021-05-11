import React from "react";
import { useState } from "react";
import { Button, Form, Container, Col } from "react-bootstrap";

const InvoicesPage = () => {
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [service, setService] = useState("");
  const [amount_due, setAmount_due] = useState("");
  const [email, setEmail] = useState("");
  const [reminder_date, setReminder_date] = useState("");
  return (
    <Container className="d-flex justify-content-center">
      <Col xs={12} sm={12} md={6} lg={9}>
        <Form className="data-form">
          <h3 className="form-title">SEND REMINDER</h3>
          <Form.Group>
            <Form.Control
              placeholder="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              placeholder="Business Name"
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              placeholder="Services Rendered"
              type="text"
              value={service}
              onChange={(e) => setService(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              placeholder="Amount Due"
              type="number"
              value={amount_due}
              onChange={(e) => setAmount_due(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              placeholder="Enter Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Label>Date of Reminder</Form.Label>
          <Form.Control
            type="date"
            value={reminder_date}
            onChange={(e) => setReminder_date(e.target.value)}
          />
          <Button className="btn mt-2" type="submit">
            SEND
          </Button>
        </Form>
      </Col>
    </Container>
  );
};

export default InvoicesPage;
