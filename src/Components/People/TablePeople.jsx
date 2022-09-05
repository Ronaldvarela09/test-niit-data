import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function TablePeople({ peoples, detailPeople }) {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>Edad</th>
          <th>Tipo de documento</th>
          <th>Número de documento</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {peoples.length > 0 &&
          peoples.map((people, index) => (
            <tr key={index}>
              <td>{people.name}</td>
              <td>{people.surname}</td>
              <td>{people.age}</td>
              <td>{people.typeDocument.name}</td>
              <td>{people.identificationNumber}</td>
              <td>
                <Button
                  variant="secondary"
                  onClick={() => detailPeople(people.id)}
                >
                  Ver detalle
                </Button>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}
export default TablePeople;
