import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function CadSoc() {
    const boxRef = useRef(null);
    const [constraints, setConstraints] = useState({ left: 0, right: 0, top: 0, bottom: 0 });
    const [isExpanded, setIsExpanded] = useState(false);
    const clickTimer = useRef(null);
    const isDragging = useRef(false);

    useEffect(() => {
        const updateConstraints = () => {
            if (boxRef.current) {
                const rect = boxRef.current.getBoundingClientRect();
                setConstraints({
                    left: -rect.left,
                    right: window.innerWidth - rect.right,
                    top: -rect.top,
                    bottom: window.innerHeight - rect.bottom,
                });
            }
        };

        updateConstraints();
        window.addEventListener("resize", updateConstraints);
        return () => window.removeEventListener("resize", updateConstraints);
    }, []);

    const handlePointerDown = () => {
        isDragging.current = false;
        clickTimer.current = setTimeout(() => {
            clickTimer.current = null;
        }, 200);
    };

    const handlePointerUp = () => {
        if (clickTimer.current) {
            clearTimeout(clickTimer.current);
            clickTimer.current = null;
            if (!isDragging.current) {
                setIsExpanded(!isExpanded);
            }
        }
    };

    return (
        <motion.div
            ref={boxRef}
            drag
            dragConstraints={constraints}
            onDragStart={() => (isDragging.current = true)}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            className={`cadsoc ${isExpanded ? "expanded" : ""}`} // alterna classe
        >
            {isExpanded && <div style={{ padding: 10, color: "white" }}>Adicione informações aqui</div>}
        </motion.div>
    );
}
