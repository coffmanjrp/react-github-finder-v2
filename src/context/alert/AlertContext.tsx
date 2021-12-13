import { createContext, ReactNode, useReducer } from 'react';
import alertReducer from './AlertReducer';
import { AlertContextType } from 'types';

const AlertContext = createContext({} as AlertContextType);

export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const initialState = null;
  const [state, dispatch] = useReducer(alertReducer, initialState);

  const setAlert = (msg: string, type: string) => {
    dispatch({ type: 'SET_ALERT', payload: { msg, type } });

    setTimeout(() => dispatch({ type: 'REMOVE_ALEERT' }), 3000);
  };

  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
