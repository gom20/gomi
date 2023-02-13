import { createContext } from 'react';

interface IAppContext {
    targetPage: string;
    setTargetPage: React.Dispatch<React.SetStateAction<string>>;
}
export const AppContext = createContext<IAppContext>({ targetPage: '', setTargetPage: () => {} });
