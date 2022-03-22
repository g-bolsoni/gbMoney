import React from 'react';
import IncomeImg from "../../assets/entradas.svg";
import outComeImg from "../../assets/saidas.svg";
import totalImg from "../../assets/total.svg"

import { Container } from './styles';

export const Summary: React.FC = () => {
  return (
      <Container>
        <div>
          <header>
            <p>Entradas</p>
            <img src={IncomeImg} alt="Entrtadas" />
          </header>
          <strong>R$1000,00</strong>
        </div>

        <div>
          <header>
            <p>Saídas</p>
            <img src={outComeImg} alt="Saídas" />
          </header>
          <strong>R$-500,00</strong>
        </div>

        <div className="highlight_background">
          <header>
            <p>Total</p>
            <img src={totalImg} alt="Total" />
          </header>
          <strong>R$500,00</strong>
        </div>
      </Container>
  );
}

