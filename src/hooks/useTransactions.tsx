import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';

interface Transaction {
    id: number,
    title: string,
    amount: number,
    type: string,
    category: string,
    createdAt: string
}
interface ChildrenProps{
    children: ReactNode;
}
interface TransactionsContextProps{
    transactions: Transaction[],
    createTransactions: (transaction: createTransactionPropos) => Promise<void>
}
type createTransactionPropos = Omit<Transaction, 'id' | 'createdAt'>

const TransactionsContext = createContext<TransactionsContextProps>(
    {} as TransactionsContextProps
);

export function TransactionsProvider({children}: ChildrenProps){
    const [transactions, setTransaction] = useState<Transaction[]>([]);
    useEffect(() => {
        api.get('transactions')
        .then(response => setTransaction(response.data.transactions))
        .catch(err => console.error(err));
    },[]);

    async function createTransactions(createTransactionPropos: createTransactionPropos){
        const response = await api.post('/transactions', {
            ...createTransactionPropos,
            createdAt: new Date(),
        });
        const { transaction } = response.data;
        setTransaction([...transactions, transaction]);
    }

    return (
        <TransactionsContext.Provider value={{transactions, createTransactions}} >
            {children}
        </TransactionsContext.Provider >
    );
}

export function useTransactions(){
    const context =  useContext(TransactionsContext);
    return context;
}