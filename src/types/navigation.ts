import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  TransactionList: undefined; // No params
  TransactionDetail: { transaction: any }; // Replace 'any' with your transaction type
};