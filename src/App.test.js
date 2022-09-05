import { render, screen } from "@testing-library/react";
import ListPeople from "../src/Pages/People/ListPeople";
import { BrowserRouter as Router } from "react-router-dom";

beforeEach(() => {
  render(
    <Router>
      <ListPeople />
    </Router>
  );
});

test("test title list People", () => {
  const title = screen.getByText(/Consulta de personas/i);
  expect(title).toBeInTheDocument();
});

test("renders form search People", () => {
  const labelDocument = screen.getByLabelText(/Tipo de documento/i);
  expect(labelDocument).toBeInTheDocument();

  const labelNumberDocument = screen.getByLabelText(/Número de documento/i);
  expect(labelNumberDocument).toBeInTheDocument();

  const btnSearchPeople = screen.getByRole("button", { name: /Buscar/i });
  expect(btnSearchPeople).toBeInTheDocument();
});