import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { BlockSeletor } from "./block-seletor";

export function CadBlock() {
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
                if (!isExpanded) setIsExpanded(true);
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
            className={`cadblock ${isExpanded ? "expanded" : ""}`}
        >
            {!isExpanded && (
                <div className="icon-wrapper flex justify-center items-center w-full h-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        strokeWidth={1.5} stroke="currentColor"
                        className="size-12 drop-shadow-sm drop-shadow-black">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
                    </svg>
                </div>
            )}

            {isExpanded && (
                <div className="container-block">
                    <div className="!pt-2 !pl-4 !pb-4 flex justify-start gap-16 items-center" >
                        <button
                            onClick={() => setIsExpanded(false)}
                            className="bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-800 border-1 border-x-neutral-500/50 border-y-neutral-700/70 w-8 h-7 rounded-lg"
                        >
                            X
                        </button>
                        <div className="topblock">BLOQUEAR</div>
                    </div>

                    {/*CORPO*/}
                    <div className="flex flex-col gap-2">
                        <BlockSeletor />
                        <div className="bline flex">
                            <div className="lines flex-1">
                                <p>09:30-10:30</p>
                            </div>
                            <div className="lines flex-1">
                                <input type="checkbox" name="block1" id="block1" />
                            </div>
                        </div>
                        <div className="bline flex">
                            <div className="lines flex-1">
                                <p>10:30 - 11:30</p>
                            </div>
                            <div className="lines flex-1">
                                <input type="checkbox" name="block2" id="block2" />
                            </div>
                        </div>
                        <div className="bline flex">
                            <div className="lines flex-1">
                                <p>11:30 - 12:30</p>
                            </div>
                            <div className="lines flex-1">
                                <input type="checkbox" name="block3" id="block3" />
                            </div>
                        </div>
                        <div className="bline flex">
                            <div className="lines flex-1">
                                <p>12:30 - 13:30</p>
                            </div>
                            <div className="lines flex-1">
                                <input type="checkbox" name="block4" id="block4" />
                            </div>
                        </div>
                        <div className="bline flex">
                            <div className="lines flex-1">
                                <p>13:30 - 14:30</p>
                            </div>
                            <div className="lines flex-1">
                                <input type="checkbox" name="block5" id="block5" />
                            </div>
                        </div>
                        <div className="bline flex">
                            <div className="lines flex-1">
                                <p>14:30 - 15:30</p>
                            </div>
                            <div className="lines flex-1">
                                <input type="checkbox" name="block6" id="block6" />
                            </div>
                        </div>
                        <div className="bline flex">
                            <div className="lines flex-1">
                                <p>15:30 - 16:30</p>
                            </div>
                            <div className="lines flex-1">
                                <input type="checkbox" name="block7" id="block7" />
                            </div>
                        </div>
                        <div className="bline flex">
                            <div className="lines flex-1">
                                <p>16:30 - 17:30</p>
                            </div>
                            <div className="lines flex-1">
                                <input type="checkbox" name="block8" id="block8" />
                            </div>
                        </div>
                        <div className="motivo">
                            <p>Motivo</p>
                            <input className="bg-neutral-900 w-80 rounded-lg !pl-2" type="text" name="motivo" id="motivo" />
                        </div>
                        <div>
                            <input className="bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-800 border-1 border-x-neutral-500/50 border-y-neutral-700/70 w-24 h-10 rounded-lg" type="button" value="Confirmar" />
                        </div>
                    </div>
                </div>
            )}
        </motion.div>
    );
}
