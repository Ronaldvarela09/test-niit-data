import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import * as yup from "yup";
import { PeopleService } from "../../Service/PeopleService";
import TablePeople from "../../Components/People/TablePeople";
import FormSearch from "../../Components/People/FormSearch";

const schema = yup.object().shape({
  typeDocument: yup.string().required("Debe seleccionar un tipo de documento"),
  identificationNumber: yup
    .number()
    .required("El Número de documento es Requerido.")
    .min(9999999, "El Número de documento debe tener mínimo 8 dígitos.")
    .max(99999999999, "El Número de documento debe tener máximo 11 dígitos."),
});

const ListPeople = () => {
  const navigate = useNavigate();
  const [peoples, setPeoples] = useState([]);

  const searchPeople = (params) => {
    const auxPeoples = [...peoples];
    const filterPeoples = auxPeoples.filter(
      (people) =>
        people.typeDocument.code === params.typeDocument &&
        people.identificationNumber === params.identificationNumber
    );
    setPeoples(filterPeoples);
  };

  const detailPeople = (id) => {
    navigate(`/detalle/${id}`);
  };

  useEffect(() => {
    const listPeoples = PeopleService.getListPeople();
    setPeoples(listPeoples);
  }, []);

  const keyPressF = (e) => {
    const pattern = new RegExp("^[0-9]$");
    if (!pattern.test(e.key)) {
      return e.preventDefault();
    }
    return false;
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
          <h2>Consulta de personas</h2>
        </Col>
        <Col xs={12} sm={12} lg={12} xl={12}>
          <Card>
            <Card.Body>
              <FormSearch schema={schema} searchPeople={searchPeople} keyPressF={keyPressF}/>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} sm={12} lg={12} xl={12}>
          <Card>
            <Card.Body>
              <TablePeople peoples={peoples} detailPeople={detailPeople} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default ListPeople;
