import { Result } from '@/entities';
import { AuthApiCore, CredentialStorage, ISignIn, TokenPair } from '@/shared';

export const signIn = async (authData: ISignIn) => {
  const data = await AuthApiCore.signIn(authData)
    .then(({ data }) => {
      const result = new Result<TokenPair>();
      return result.setResult(data, 'Вход выполнен успешно!');
    })
    .catch(({ message }) => {
      const result = new Result<TokenPair>();
      return result.setError(message);
    });

  if (!data.isError) {
    for (const [key, value] of Object.entries(data.result.data!)) {
      CredentialStorage.set(key, value);
    }
  }

  return data;
};
