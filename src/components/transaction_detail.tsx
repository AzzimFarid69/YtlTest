import React from 'react';
import { View, Text, Button } from 'react-native';
import { Transaction } from '../services/transaction_service';

interface TransactionDetailProps {
  transaction: Transaction;
  onBack: () => void;
}

const TransactionDetail: React.FC<TransactionDetailProps> = ({ transaction, onBack }) => {
  return (
    <View style={{ padding: 16 }}>
      <Text>Description: {transaction.description}</Text>
      <Text>Date: {transaction.date}</Text>
      <Text>Type: {transaction.type}</Text>
      <Text>Amount: ${transaction.amount}</Text>
      <Button title="Back" onPress={onBack} />
    </View>
  );
};

export default TransactionDetail;
