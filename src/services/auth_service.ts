// src/services/authService.ts
import * as Keychain from 'react-native-keychain';

export const authenticateUser = async () => {
  const credentials = await Keychain.getGenericPassword();
  return credentials ? credentials : null;
};

export const saveCredentials = async (username: string, password: string) => {
  await Keychain.setGenericPassword(username, password);
};
