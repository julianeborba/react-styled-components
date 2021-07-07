import React from "react";
import styled from "styled-components";

//Dentro da lista tem itens cada um dele tem 3 informações, aí organizamos assim

const Item = styled.div`
  display: flex;
  flex-direction: column;

  .text {
    font-weight: bold;
  }
`;

//Pode usar o css com o styled

export default ({ type, from, value }) => {
  return (
    <Item>
      <span className="text">{type}</span>
      <span>{from}</span>
      <span>{value}</span>
    </Item>
  );
};
