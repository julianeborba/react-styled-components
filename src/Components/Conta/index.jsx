import React, { useState } from "react";

import privado from "../../assets/images/privado.svg";
import olho_icone from "../../assets/images/olho.svg";
import dinheiro from "../../assets/images/dinheiro.svg";
import { ImgIcone, Box, Botao, Saldo, Detalhe, IconeTema } from "../UI";
import styled from "styled-components";

const IconeMargin = styled(ImgIcone)`
  margintop: "2px";
`;

/*Isso é herança do styled component, ao inves, de passar a tag html passa o component de vc vai herdar e adiciona a configuracao adicional que vc quer
quando criamos um componente de estilo dentro de um arquivo de um componente React, nós não criamos componente estilizados dentro do componente React.
 A estilização ocorre sempre fora, pois, se o mesmo estiver dentro, pode acarretar em problemas com a performance.*/

const Conta = () => {
  const [toggleState, untoggle] = useState(true);

  const toggleHandler = () => {
    untoggle((toggleState) => !toggleState);
  };

  return (
    <Box>
      <h2>Conta</h2>
      <div style={{ fontSize: "26px", padding: "20px 0" }}>
        Saldo disponível{" "}
        <span>
          <IconeTema src={dinheiro} alt="Ícone Saldo" />
        </span>
        {toggleState ? (
          <Saldo>
            <Detalhe>R$</Detalhe>0,00{" "}
          </Saldo>
        ) : null}
      </div>

      <Botao onClick={toggleHandler}>
        <IconeMargin
          src={toggleState ? privado : olho_icone}
          alt="Privacidade do Saldo"
        />
      </Botao>
    </Box>
  );
};

export default Conta;
