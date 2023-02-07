import { motion } from 'framer-motion';

export default function Intro() {
    return (
        <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: 1,
            }}
            style={{
                flex: 1,
                backgroundColor: 'yellow',
                width: '100vw',
                height: '100vh',
                alignItems: 'center',
            }}>
            <h1>안녕하세요. </h1>
        </motion.div>
    );
}
