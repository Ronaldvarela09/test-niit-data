import React from "react";
import { Formik } from "formik";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FormSearch({ schema, searchPeople, keyPressF }) {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={(values) => {
        searchPeople(values);
      }}
      initialValues={{
        typeDocument: "",
        identificationNumber: 0,
      }}
    >
      {({ handleSubmit, handleChange, values, isValid, errors, dirty }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="gap-1 align-items-end">
            <Col xs={12} sm={12} lg={5} xl={5}>
              <Form.Label for="idTypeDocument">Tipo de documento</Form.Label>
              <Form.Select
                type="text"
                id="idTypeDocument"
                name="typeDocument"
                value={values.typeDocument}
                onChange={handleChange}
                isInvalid={!!errors.typeDocument}
              >
                <option value="">Seleccionar tipo de documento</option>
                <option value="cc">Cédula de ciudadanía</option>
                <option value="pasaporte">Pasaporte</option>
              </Form.Select>
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.typeDocument}
              </Form.Control.Feedback>
            </Col>
            <Col xs={12} sm={12} lg={5} xl={5}>
              <Form.Label for="idNumberDocument">
                Número de documento
              </Form.Label>
              <Form.Control
                type="number"
                id="idNumberDocument"
                name="identificationNumber"
                value={values.identificationNumber}
                onChange={handleChange}
                isInvalid={!!errors.identificationNumber}
                onKeyPress={keyPressF}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.identificationNumber}
              </Form.Control.Feedback>
            </Col>
            <Col xs={12} sm={12} lg={1} xl={1}>
              <Button disabled={!(isValid && dirty)} type="submit">
                Buscar
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
}
export default FormSearch;
