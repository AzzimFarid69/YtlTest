// src/components/TransactionList.tsx
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, RefreshControl } from 'react-native';
import { Transaction, getTransactions } from '../services/transaction_service';

interface TransactionListProps {
  onTransactionSelect: (transaction: Transaction) => void;
}

const TransactionList: React.FC<TransactionListProps> = ({ onTransactionSelect }) => {
  const [transactions, setTransactions] = useState<Transaction[]>(getTransactions());
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTransactions(getTransactions());
    setRefreshing(false);
  };

  return (
    <FlatList
      data={transactions}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => onTransactionSelect(item)}>
          <View style={{ padding: 16 }}>
            <Text>{item.description}</Text>
            <Text>{item.date}</Text>
            <Text>{item.type === 'credit' ? '+' : '-'}${item.amount}</Text>
          </View>
        </TouchableOpacity>
      )}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    />
  );
};

export default TransactionList;
