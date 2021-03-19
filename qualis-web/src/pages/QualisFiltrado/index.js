import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import Titulo from "../../components/Titulo";
import Botao from "../../components/Botao";

import qualisJson from "../../utils/qualis.json";

import { Container } from "./styles";

export default function QualisFiltrado() {
  const { id } = useParams();

  const [qualis, setQualis] = useState([]);
  const [qualisResult, setQualisResult] = useState({});

  function carregaQualis() {
    new Promise(function (resolve, reject) {
      resolve(setQualis(qualisJson));
    }).then(() => {
      const result = qualis.filter((qualis) => qualis.id == id);
      setQualisResult(result[0]);
    });
  }

  useEffect(() => {
    carregaQualis();
  }, [qualis]);

  return (
    <Container className="pt-2 pb-2 h-100">
      <div className="row d-flex align-items-center">
        <Link to="/qualis" style={{ textDecoration: "none" }}>
          <Botao>
            <Titulo reverse botao style={{ margin: 0 }}>
              {"←"}
            </Titulo>
          </Botao>
        </Link>
        <Titulo className="ml-3">Informações adicionais</Titulo>
      </div>
      {qualisResult && (
        <div className="mt-5 d-flex align-items-center justify-content-center">
          <div>
            <Titulo>{`Sigla: ${qualisResult.sigla}`}</Titulo>
            <Titulo
              reverse
            >{`Conferência: ${qualisResult.conferencia}`}</Titulo>
            <Titulo>{`Categoria: ${qualisResult.categoria}`}</Titulo>
            <Titulo
              reverse
            >{`Qualis Final: ${qualisResult.qualis_final}`}</Titulo>
            <br />
            <Titulo>
              Link:{" "}
              <a href={qualisResult.link}>
                {qualisResult.link && qualisResult.link.slice(0, 50) + "..."}
              </a>
            </Titulo>
          </div>
        </div>
      )}
    </Container>
  );
}
