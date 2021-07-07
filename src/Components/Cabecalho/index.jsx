import React from "react";
import styled from "styled-components";
import bank_logo from "../../assets/images/bank_logo.svg";
import { corPrimaria } from "../UI/variaveis";

const StyleHeader = styled.nav`
  background-color: ${corPrimaria};
  display: flex;
  justify-content: space-between;
  padding: 0 15vw;
  height: 10vh;
  align-items: center;
`;
const Logo = styled.img`
  height: 50px;
  width: 50px;
`;

const BtnCabecalho = styled.a`
text-align: center;
border-radius: 3px;
padding: 5px 20px;
margin: 0 10px;
font-weight: 600;
border: 2px solid white;

background: ${(props) => (props.primary ? "white" : corPrimaria)};
color: ${(props) => (props.primary ? corPrimaria : "white")};
`;
/*Utilizou o props para fazer a formula do ternario, podendo ser um if, para verificar qual a cor e alterar os botões de ajuda e sair
Nesses casos é necessario colocar o ; para atualoizar*/

const Cabecalho = () => {
  return (
    <StyleHeader>
      <Logo src={bank_logo} alt="Logo Smart Bank" />
      <div>
        <BtnCabecalho primary href="https://google.com">
          Ajuda
        </BtnCabecalho>
        <BtnCabecalho href="https://google.com">
          Sair
        </BtnCabecalho>
      </div>
    </StyleHeader>
  );
};

export default Cabecalho;
