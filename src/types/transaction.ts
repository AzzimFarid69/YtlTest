export type Transaction = {
    id: number;
    amount: number;
    date: string;
    description: string;
    type: 'debit' | 'credit';
};