import React from "react";
import styled from "styled-components";
import Item from "../Item";
import ImageFilter from '../ImageFilter';
 

//Criado apenas para aplicar estilização do
const Itens = styled.div`
  box-shadow: 4px 4px 20px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 2px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  font-size: 12px;
`;
export default (props) => {
  return (
    <Itens>
      {ImageFilter(props.type)}
      <Item {...props} />{" "}
      {/*...props fica assim pra indicar que vc vai receber varias propriedades e elas podem aumentar, se nao vc definiria que vai receber o nome ou id*/}
      <span>{props.date}</span>
    </Itens>
  );
};
