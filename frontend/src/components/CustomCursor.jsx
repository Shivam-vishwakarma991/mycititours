import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorType, setCursorType] = useState('default');

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            if (e.target.closest('[data-cursor="drag"]')) {
                setCursorType('drag');
            } else if (e.target.closest('[data-cursor="view"]')) {
                setCursorType('view');
            } else {
                setCursorType('default');
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 8,
            y: mousePosition.y - 8,
            height: 16,
            width: 16,
            backgroundColor: '#fdfaf6',
        },
        view: {
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
            height: 80,
            width: 80,
            backgroundColor: '#fdfaf6',
            mixBlendMode: 'difference',
        },
        drag: {
            x: mousePosition.x - 40,
            y: mousePosition.y - 40,
            height: 80,
            width: 80,
            backgroundColor: '#fdfaf6',
            mixBlendMode: 'difference',
        }
    };

    return (
        <motion.div
            className="custom-cursor fixed top-0 left-0 rounded-full flex items-center justify-center pointer-events-none z-50 transition-colors"
            variants={variants}
            animate={cursorType}
            transition={{ type: 'tween', ease: 'backOut', duration: 0.15 }}
        >
            {cursorType === 'view' && <span className="text-forest text-sm font-bold tracking-widest" style={{ mixBlendMode: 'normal' }}>VIEW</span>}
            {cursorType === 'drag' && <span className="text-forest text-sm font-bold tracking-widest" style={{ mixBlendMode: 'normal' }}>DRAG</span>}
        </motion.div>
    );
}
