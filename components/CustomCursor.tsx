import styles from '@/styles/CustomCursor.module.css';
import { useEffect, useState } from 'react';
const CustomCursor = () => {
    type IPosition = {
        x: null | number;
        y: null | number;
    };
    const [mousePosition, setMousePosition] = useState<IPosition>({ x: null, y: null });
    useEffect(() => {
        const mouseMoveHandler = (event: MouseEvent) => {
            const { clientX, clientY } = event;
            setMousePosition({ x: clientX, y: clientY });
        };
        document.addEventListener('mousemove', mouseMoveHandler);
        return () => {
            document.removeEventListener('mousemove', mouseMoveHandler);
        };
    }, []);

    return <div className={styles.ring} style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}></div>;
};
export default CustomCursor;
