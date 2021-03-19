import React, { useState, useEffect } from "react";
import { Table, Pagination, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import qualisJson from "../../utils/qualis.json";

import { pagination } from "../../utils/pagination";

import Titulo from "../../components/Titulo";
import Botao from "../../components/Botao";

import { Container } from "./styles";

export default function Qualis() {
  const [qualis, setQualis] = useState([]);
  const [qualisFiltrado, setQualisFiltrado] = useState([]);
  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(1);
  const [radio, setRadio] = useState("sigla");

  function carregaQualis() {
    setQualis(qualisJson);
  }

  function paginateQualis(array) {
    const { data, numberOfPages: pages } = pagination(array, 5, page);
    setQualisFiltrado(data);
    setNumberOfPages(pages);
  }

  function repaginateQualis(array, currentPage) {
    const { data } = pagination(array, 5, currentPage);
    setQualisFiltrado(data);
  }

  function filterQualis(query) {
    const filtered = qualis.filter((qualis) => {
      if (radio === "sigla") {
        return qualis.sigla.toLowerCase().indexOf(query.toLowerCase()) > -1;
      } else if (radio === "conferência") {
        return (
          qualis.conferencia.toLowerCase().indexOf(query.toLowerCase()) > -1
        );
      } else {
        return null;
      }
    });

    paginateQualis(filtered);
  }

  useEffect(() => {
    carregaQualis();
    paginateQualis(qualis);
  }, [qualis]);

  return (
    <Container className="pt-2 pb-2">
      <Link to="/" style={{ textDecoration: "none" }}>
        <Botao>
          <Titulo reverse botao style={{ margin: 0 }}>
            {"←"}
          </Titulo>
        </Botao>
      </Link>
      <Titulo style={{ textTransform: "none", textAlign: "start" }}>
        Olá! :)
      </Titulo>
      <Form>
        <Form.Group>
          <Form.Control
            id="search"
            type="text"
            placeholder="Insira a sigla ou o nome da conferência/congresso"
            onChange={(query) => filterQualis(query.target.value)}
          />
        </Form.Group>
        <Form.Check
          inline
          type="radio"
          id="sigla"
          label="Sigla"
          checked={radio === "sigla" ? true : false}
          onClick={() => setRadio("sigla")}
        />
        <Form.Check
          inline
          type="radio"
          id="conferencia"
          label="Conferência"
          checked={radio === "conferência" ? true : false}
          onClick={() => setRadio("conferência")}
        />
      </Form>
      <Table striped bordered hover variant="dark" className="mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Sigla da conferência</th>
            <th>Nome da conferência</th>
          </tr>
        </thead>
        <tbody>
          {qualisFiltrado.map((qualis) => (
            <tr key={qualis.id}>
              <td>{qualis.id}</td>
              <td>{qualis.sigla}</td>
              <td>{qualis.conferencia}</td>
              <td>
                <Link
                  to={`/qualis/${qualis.id}`}
                  style={{ textDecoration: "none", alignSelf: "center" }}
                >
                  <Botao
                    style={{
                      padding: 0,
                      margin: 0,
                      backgroundColor: "transparent",
                      boxShadow: "none",
                    }}
                  >
                    <Titulo reverse botao style={{ margin: 0, fontSize: 12 }}>
                      {"Ver mais..."}
                    </Titulo>
                  </Botao>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        <Pagination.Prev
          onClick={() => {
            if (page > 1) {
              repaginateQualis(qualis, page - 1);
              setPage(page - 1);
            }
          }}
        />
        <Pagination.Next
          onClick={() => {
            if (page < numberOfPages) {
              repaginateQualis(qualis, page + 1);
              setPage(page + 1);
            }
          }}
        />
      </Pagination>
    </Container>
  );
}
