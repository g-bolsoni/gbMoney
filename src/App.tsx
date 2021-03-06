import { useState } from "react";
import { TransactionsProvider } from "./hooks/useTransactions"; 
import { Dashboard } from "./componets/Dashboard";
import { Header } from "./componets/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal'

import {  NewTransactionsModal } from './componets/NewTransactionsModal'

Modal.setAppElement('#root');
export function App() {
  /*MODAL*/
  const [isNewTransaction, setIsNewTransaction] = useState(false); 
  function handleOpenNewTransactionModal() {
      setIsNewTransaction(true);
  }    
  function handleCloseNewTransactionModal() {
      setIsNewTransaction(false);
  }
  /*MODAL*/
  return (
    <TransactionsProvider >
      <Header  onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionsModal 
        isOpen={isNewTransaction}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}