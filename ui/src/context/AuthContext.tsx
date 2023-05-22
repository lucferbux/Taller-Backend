import { createContext, ReactNode, useCallback, useEffect, useState } from 'react';
import createApiClient from '../api/api-client-factory';
import { User } from '../model/user';
import {
  getCurrentUser,
  isTokenActive,
  setLogoutIfExpiredHandler,
  logout as logoutService,
  setAuthToken
} from '../utils/auth';

type AuthContextType = {
  user: User | undefined;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  loadUser: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: undefined,
  isLoading: false,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  loadUser: () => {}
});

interface Props {
  children: ReactNode;
}

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User | undefined>(getCurrentUser());
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadUser = useCallback(() => {
    const currentUser = getCurrentUser();
    setUser(currentUser);
  }, []);

  useEffect(() => {
    if (isTokenActive()) {
      setLogoutIfExpiredHandler(setUser);
      loadUser();
    } else {
      logoutService();
      setUser(undefined);
    }
  }, [loadUser]);

  const login = useCallback(
    async (username: string, password: string) => {
      const api = createApiClient();
      setIsLoading(true);
      try {
        const result = await api.token(username, password);
        setAuthToken(result.token);
        setLogoutIfExpiredHandler(setUser);
        loadUser();
      } catch (apiError) {
        throw new Error();
      } finally {
        setIsLoading(false);
      }
    },
    [setUser, loadUser]
  );

  const logout = useCallback(async () => {
    logoutService();
    setUser(undefined);
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout, loadUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
