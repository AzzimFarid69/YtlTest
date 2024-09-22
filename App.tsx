import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TransactionList from './src/components/transaction_list';
import TransactionDetail from './src/components/transaction_detail';
import { authenticateUser, saveCredentials } from './src/services/auth_service';
import { RootStackParamList } from './src/types/navigation';
import { StackNavigationProp } from '@react-navigation/stack';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  const [authenticated, setAuthenticated] = useState(false); 

  const handleAuthentication = async () => {
    const user = await authenticateUser();
    if (user) {
      setAuthenticated(true);
    } else {
      await saveCredentials('username', 'password'); // Replace with actual input
      setAuthenticated(true);
    }
  };

  const renderTransactionList = ({ navigation }: { navigation: StackNavigationProp<RootStackParamList, 'TransactionList'> }) => (
    <TransactionList
      onTransactionSelect={(transaction) => navigation.navigate('TransactionDetail', { transaction })}
    />
  );

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TransactionList">
        <Stack.Screen name="TransactionList" options={{ title: 'Transactions' }}>
          {renderTransactionList}
        </Stack.Screen>
        <Stack.Screen name="TransactionDetail" options={{ title: 'Transaction Detail' }}>
          {({ route, navigation }) => (
            <TransactionDetail
              transaction={route.params.transaction}
              onBack={() => navigation.goBack()}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
