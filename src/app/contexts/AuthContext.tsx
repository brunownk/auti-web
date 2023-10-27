import { createContext, useCallback, useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';

import { localStorageKeys } from '../config/localStorageKeys';
import { usersService } from '../services/usersService';
import { LaunchScreen } from '../../view/components/LaunchScreen';

interface AuthContextValue {
  signedIn: boolean;
  signin(accessToken: string): void;
  signout(): void;
}

export const AuthContext = createContext({} as AuthContextValue);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [signedIn, setSignedIn] = useState<boolean>(() => {
    const storedAccessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);

    return !!storedAccessToken;
  });

  const { isError, isFetching, isSuccess } = useQuery({
    queryKey: ['users', 'me'],
    queryFn: async () => usersService.me(),
    enabled: signedIn,
  });

  const signin = useCallback((accessToken: string) => {
    localStorage.setItem(localStorageKeys.ACCESS_TOKEN, accessToken);
    setSignedIn(true);
  }, [])

  const signout = useCallback(async () => {
    localStorage.removeItem(localStorageKeys.ACCESS_TOKEN);
    setSignedIn(false);
  }, [])

  useEffect(() => {
    if (isError) {
      toast.error('Sua sessão expirou!')
      signout();
    }
  }, [isError, signout])

  return (
    <AuthContext.Provider value={{
      signedIn: isSuccess && signedIn,
      signin,
      signout
    }}>
      <LaunchScreen isLoading={isFetching} />

      {!isFetching && children}
    </AuthContext.Provider>
  )
}

