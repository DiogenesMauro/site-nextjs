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
            className={`cadsoc ${isExpanded ? "expanded" : ""}`}
        >
            {!isExpanded && (
                <div className="icon-wrapper flex justify-center items-center w-full h-full !pl-2 ">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        strokeWidth={1.5} stroke="currentColor"
                        className="size-12 drop-shadow-sm drop-shadow-black">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 
                            3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 
                            6.75 0ZM3 19.235v-.11a6.375 6.375 
                            0 0 1 12.75 0v.109A12.318 12.318 
                            0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z" />
                    </svg>
                </div>
            )}

            {isExpanded && (
                <form className="cadastro" encType="multipart/form-data">
                    <div className="headcad">
                        <div className="top">CADASTRO SOCIETY</div>
                        <div className="!pt-2" >
                            <button
                                onClick={() => setIsExpanded(false)}
                                className="bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-800 border-1 border-x-neutral-500/50 border-y-neutral-700/70 w-8 h-7 rounded-lg"
                            >
                                X
                            </button>
                        </div>
                    </div>

                    <div className="corpo">
                        <div className="linha1">
                            <div className="jumpline">
                                <div className="nome">Nome</div>
                                <div className="inputcad">
                                    <input type="text" style={{ paddingLeft: "4px" }} required minLength={5} />
                                </div>
                            </div>
                        </div>

                        <div className="linha1">
                            <div className="campo">
                                <div className="jumpline">
                                    <div className="label">RG</div>
                                    <div className="inputcad">
                                        <input id="rg" type="text" style={{ textAlign: "center" }} required minLength={8} />
                                    </div>
                                </div>

                                <div className="jumpline">
                                    <div className="label">CPF</div>
                                    <div className="inputcad">
                                        <input id="cpf" type="text" style={{ textAlign: "center" }} required minLength={10} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="linha1">
                            <div className="campo">
                                <div className="jumpline">
                                    <div className="nasc">Data de Nascimento</div>
                                    <div className="inputcad">
                                        <input id="nasc" type="text" style={{ textAlign: "center" }} required minLength={8} />
                                    </div>
                                </div>

                                <div className="jumpline">
                                    <div className="tel">Telefone</div>
                                    <div className="inputcad">
                                        <input id="telefone" type="text" style={{ textAlign: "center" }} required minLength={10} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="linha1">
                            <div className="campo">
                                <div className="jumpline">
                                    <div className="datacad">Data do Cadastro</div>
                                    <div className="inputcad">
                                        <input id="datacad" type="text" style={{ textAlign: "center" }} required minLength={8} />
                                    </div>
                                </div>

                                <div className="jumpline">
                                    <div className="cidcad">Cidade/UF</div>
                                    <div className="inputcad">
                                        <input
                                            type="text"
                                            style={{ textAlign: "center" }}
                                            placeholder="Ex: Mogi das Cruzes/SP"
                                            required
                                            minLength={5}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="linha1">
                            <div className="jumpline">
                                <div className="email">Email</div>
                                <div className="inputcad">
                                    <input
                                        type="email"
                                        style={{ paddingLeft: "4px", textAlign: "center" }}
                                        placeholder="meuemail@email.com.br"
                                        pattern="^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
                                        title="endereço de e-mail"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="btncad">
                            <input type="submit" value="CADASTRAR" />
                        </div>
                    </div>

                </form>

            )}
        </motion.div>
    );
}
