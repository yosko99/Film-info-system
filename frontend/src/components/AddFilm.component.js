import { Form, Button, Row, Col, InputGroup } from 'react-bootstrap';
import React, { useState } from 'react';
import axios from 'axios';

const AddFilm = () => {
  const [filmState, setFilmState] = useState({
    nazvanieFilm: '',
    rejisyorFilm: '',
    kompozitorFilm: '',
    tematikaFilm: '',
    kategoriqFilm: '',
    scenaristFilm: ''
  });

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    axios.post('/api/film/', {
      film: filmState
    }).then((response) => {
      console.log(response.data);
    }).catch((err) => {
      console.log(err);
    });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setFilmState({
      ...filmState,
      [e.target.name]: value
    });
  };

  return (
    <>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="nazvanieFilm">
          <Form.Label>Име на филм</Form.Label>
          <Form.Control
            required
            type="text"
            name="nazvanieFilm"
            pattern='^[a-zA-Z]+$'
            onChange={(e) => handleChange(e)}
            placeholder="Въведете име на филм"
          />
          <Form.Control.Feedback>Изглежда добре!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="rejisyorFilm">
          <Form.Label>Режисьор филм</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Въведете име на режисьор"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
    </>
  );
};

export default AddFilm;
