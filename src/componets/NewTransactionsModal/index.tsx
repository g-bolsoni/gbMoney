import Modal from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomingImg from '../../assets/entradas.svg';
import outComeImg from '../../assets/saidas.svg';


import { Container , TransactionsTypeContainer} from './styles';
interface NewTransactionsModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}
export function NewTransactionsModal({isOpen, onRequestClose}: NewTransactionsModalProps) {
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
                <button
                    type="button"
                >
                    <img src={incomingImg} alt="Entrada" />
                    <span>Entrada</span>
                </button>
                <button
                    type="button"
                >
                    <img src={outComeImg} alt="Saida" />
                    <span>Saída</span>
                </button>
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
