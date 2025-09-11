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
            className={`cadsoc ${isExpanded ? "expanded" : ""}`}
        >
            {/* Ícone visível apenas quando não expandido */}
            {!isExpanded && (
                <div className="icon-wrapper flex justify-center items-center w-full h-full !pl-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 drop-shadow-sm drop-shadow-black">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                    </svg>
                </div>
            )}

            {/* Conteúdo exibido apenas quando expandido */}
            {isExpanded && <div style={{ padding: 10, color: "white" }}>Cadastro</div>}
        </motion.div>
    );
}
