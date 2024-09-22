import { Transaction } from "./types/transaction";

export const transactions: Transaction[] = [
    { id: 1, amount: 150.0, date: '2024-09-20', description: 'Grocery Shopping', type: 'debit' },
    { id: 2, amount: 2000.0, date: '2024-09-19', description: 'Salary', type: 'credit' },
    { id: 3, amount: 50.0, date: '2024-09-18', description: 'Dinner', type: 'debit' },
];