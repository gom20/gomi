import { AppContext } from '@/layouts/AppContext';
import { useContext } from 'react';

export default function Pager() {
    const { pages, targetPage } = useContext(AppContext);
    return <div id="pager">0{pages.indexOf(targetPage) + 1}</div>;
}
