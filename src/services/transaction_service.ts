export interface Transaction {
    id: string;
    amount: number;
    date: string;
    description: string;
    type: 'debit' | 'credit';
  }
  
  export const getTransactions = (): Transaction[] => {
    return Array.from({ length: 20 }, (_, index) => ({
      id: `tx-${index + 1}`,
      amount: Math.floor(Math.random() * 100) + 1,
      date: new Date(Date.now() - index * 24 * 60 * 60 * 1000).toLocaleDateString(),
      description: `Transaction ${index + 1}`,
      type: index % 2 === 0 ? 'credit' : 'debit',
    }));
  };
  