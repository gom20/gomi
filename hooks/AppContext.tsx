import { createContext } from 'react';

interface IAppContext {
    pages: Array<string>;
    targetPage: string;
    setTargetPage: React.Dispatch<React.SetStateAction<string>>;
}
export const AppContext = createContext<IAppContext>({ pages: ['/', '/about', '/experience', '/contact'], targetPage: '', setTargetPage: () => {} });
