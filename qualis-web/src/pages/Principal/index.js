import { Link } from "react-router-dom";

import WelcomeSvg from "../../assets/welcome.svg";

import Botao from "../../components/Botao";
import Paragrafo from "../../components/Paragrafo";
import Titulo from "../../components/Titulo";

import { Container } from "./styles";

export default function Principal() {
  return (
    <Container className="d-flex align-items-center justify-content-center h-100 flex-column">
      <img src={WelcomeSvg} alt="" width={"40%"} height={"40%"} />
      <Titulo style={{ marginTop: 20 }}>SEJA BEM-VINDO!</Titulo>
      <Paragrafo style={{ marginLeft: "25%", marginRight: "25%" }}>
        O QualisApp é um aplicativo desenvolvido com o intuito de facilitar a
        busca dos periódicos e qualis de artigos, aglomerando as informações em
        um só lugar!
      </Paragrafo>
      <Link to="/qualis" style={{ textDecoration: "none" }}>
        <Botao>
          <Titulo reverse botao style={{ margin: 0 }}>
            Continuar
          </Titulo>
        </Botao>
      </Link>
      <Link to="/duvidas" style={{ textDecoration: "none" }}>
        <Botao
          style={{
            backgroundColor: "transparent",
            boxShadow: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <Titulo botao style={{ margin: 0 }}>
            Saiba mais
          </Titulo>
        </Botao>
      </Link>
    </Container>
  );
}
