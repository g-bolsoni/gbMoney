import { useState, FormEvent } from 'react';
import { api } from '../../services/api';
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
    const [value, setValue] = useState(0);
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    function handleCreateNewTransactions(event: FormEvent) {
        event.preventDefault();
        const data = {
            title,
            category,
            value,
            type 
        };

        api.post('/transactions', data)
    }
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
        <Container onSubmit={handleCreateNewTransactions}>
            <h2>Cadastrar transação</h2>

            <input 
                placeholder="Título"
                value={title}
                onChange={event => setTitle(event.target.value)}
            />

            <input 
                type="number"
                placeholder="Valor"
                value={value}
                onChange={event => setValue(Number(event.target.value))}
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
                value={category}
                onChange={event => setCategory(event.target.value)}
            />

            <button type="submit">
                Cadastrar
            </button>
        </Container>
    </Modal>
  );
}
