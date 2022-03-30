import React, {useContext} from 'react';
import IncomeImg from "../../assets/entradas.svg";
import outComeImg from "../../assets/saidas.svg";
import totalImg from "../../assets/total.svg"
import { useTransactions } from '../../hooks/useTransactions';

import { Container } from './styles';

export const Summary: React.FC = () => {
  const { transactions } = useTransactions();

  const summary = transactions.reduce((acc, transaction ) => {
      if(transaction.type === 'deposit'){
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      }else{
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0
  })

  return (
      <Container>
        <div>
          <header>
            <p>Entradas</p>
            <img src={IncomeImg} alt="Entrtadas" />
          </header>
          <strong>
            {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(summary.deposits)}
          </strong>
        </div>

        <div>
          <header>
            <p>Saídas</p>
            <img src={outComeImg} alt="Saídas" />
          </header>
          <strong>
            {summary.withdraws > 0 ? ' - ' : ''}
            {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(summary.withdraws)}
            </strong>
        </div>

        <div className="highlight_background">
          <header>
            <p>Total</p>
            <img src={totalImg} alt="Total" />
          </header>
          <strong>
            {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(summary.total)}
          </strong>
        </div>
      </Container>
  );
}

