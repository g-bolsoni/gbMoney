import { Dashboard } from "./componets/Dashboard";
import { Header } from "./componets/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import { useState } from "react";

Modal.setAppElement('#root');
export function App() {
  const [isNewTransaction, setIsNewTransaction] = useState(false); 
    
  function handleOpenNewTransactionModal() {
      setIsNewTransaction(true);
  }    
  function handleCloseNewTransactionModal() {
      setIsNewTransaction(false);
  }
  return (
    <>
      <Header  onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <Modal 
          isOpen={isNewTransaction}
          onRequestClose={handleCloseNewTransactionModal}
          contentLabel="Example Modal"
      >
        <h2>Cadastrar transação</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}