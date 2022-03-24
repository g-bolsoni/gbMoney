import { useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomingImg from '../../assets/entradas.svg';
import outComeImg from '../../assets/saidas.svg';


import { Container , TransactionsTypeContainer, RadioButton} from './styles';
interface NewTransactionsModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}
export function NewTransactionsModal({isOpen, onRequestClose}: NewTransactionsModalProps) {
    const [type, setType] = useState('deposit')
  return (
    <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
    >
        <button type="button" className=" react-modal-close "onClick={onRequestClose}>
            <img src={closeImg} alt="Close" />    
        </button>
        <Container >
            <h2>Cadastrar transação</h2>

            <input 
                placeholder="Título"
            />

            <input 
                type="number"
                placeholder="Valor"
            />

            <TransactionsTypeContainer>
                <RadioButton 
                    type="button"
                    onClick={()=> {setType('deposit');}}
                    isActive={type === 'deposit'}
                    activeColor='green'
                >
                    <img src={incomingImg} alt="Entrada" />
                    <span>Entrada</span>
                </RadioButton>
                <RadioButton 
                    type="button"
                    onClick={()=> {setType('withdraw');}}
                    isActive={type === 'withdraw'}
                    activeColor="red"
                >
                    <img src={outComeImg} alt="Saida" />
                    <span>Saída</span>
                </RadioButton>
            </TransactionsTypeContainer>

            <input 
                placeholder="Categoria"
            />

            <button type="submit">
                Cadastrar
            </button>
        </Container>
    </Modal>
  );
}
