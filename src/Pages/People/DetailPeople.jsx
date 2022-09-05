import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { PeopleService } from "../../Service/PeopleService";

const DetailPeople = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [people, setPeople] = useState("");

  useEffect(() => {
    const listPeoples = PeopleService.getListPeople();
    const filterDetail = listPeoples.find((people) => people.id === id);
    setPeople(filterDetail);
  }, [id]);

  const handleToList = () => {
    navigate(`/`);
  };

  return (
    <Container fluid>
      <Row className="gap-3">
        <Col
          className="bg-primary text-center text-white"
          xs={12}
          sm={12}
          lg={12}
          xl={12}
        >
          <h2>Información básica</h2>
        </Col>
        <Col xs={12} sm={12} lg={12} xl={12}>
          <Card>
            <Card.Body>
              <Row>
                <Col xs={12} sm={12} lg={4} xl={4}>
                  <Form.Label>Nombres</Form.Label>
                  <Form.Control value={people.name} disabled />
                </Col>
                <Col xs={12} sm={12} lg={4} xl={4}>
                  <Form.Label>Apellidos</Form.Label>
                  <Form.Control value={people.surname} disabled />
                </Col>
                <Col xs={12} sm={12} lg={4} xl={4}>
                  <Form.Label>Edad</Form.Label>
                  <Form.Control value={people.age} disabled />
                </Col>
                <Col xs={12} sm={12} lg={4} xl={4} className="mt-2">
                  <Form.Label>Tipo de documento</Form.Label>
                  <Form.Control
                    value={
                      !!people &&
                      !!people.typeDocument &&
                      people.typeDocument.name
                    }
                    disabled
                  />
                </Col>
                <Col xs={12} sm={12} lg={4} xl={4} className="mt-2">
                  <Form.Label>Número de documento</Form.Label>
                  <Form.Control value={people.identificationNumber} disabled />
                </Col>
                <Col xs={12} sm={12} lg={4} xl={4} className="mt-2">
                  <Form.Label>Sexo</Form.Label>
                  <Form.Control value={people.sex} disabled />
                </Col>
                <Col xs={12} sm={12} lg={4} xl={4} className="mt-2">
                  <Form.Label>Estado civil</Form.Label>
                  <Form.Control value={people.statusMarital} disabled />
                </Col>
                <Col xs={12} sm={12} lg={4} xl={4} className="mt-2">
                  <Form.Label>Profesión</Form.Label>
                  <Form.Control value={people.profession} disabled />
                </Col>
                <Col xs={12} sm={12} lg={12} xl={12} className="mt-2 text-center">
                  <Button onClick={handleToList}>Volver</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default DetailPeople;
