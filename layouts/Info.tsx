import { AppContext } from '@/hooks/AppContext';
import { useContext } from 'react';

export default function Info() {
    const { pages, targetPage } = useContext(AppContext);
    return (
        <div id="info">
            <div className="logo"></div>
        </div>
    );
}
