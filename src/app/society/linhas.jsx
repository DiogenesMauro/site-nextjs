"use client";

import { useState, useEffect } from "react";

export function Linhas() {
    const linhas = [
        { horario: "09:30 - 10:30", id: 1 },
        { horario: "10:30 - 11:30", id: 2 },
        { horario: "11:30 - 12:30", id: 3 },
        { horario: "12:30 - 13:30", id: 4 },
        { horario: "13:30 - 14:30", id: 5 },
        { horario: "14:30 - 15:30", id: 6 },
        { horario: "15:30 - 16:30", id: 7 },
        { horario: "16:30 - 17:30", id: 8 },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 640);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const prevLinha = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : linhas.length - 1));
    };

    const nextLinha = () => {
        setCurrentIndex((prev) => (prev < linhas.length - 1 ? prev + 1 : 0));
    };

    return (
        <div className="content-society">
            {/* Cabeçalho */}
            <div className="head-content h-15 text-lg max-w-[928px] w-5xl bg-gray-400/10 max-md:w-[706px] max-sm:w-[412px] max-sm:text-sm flex">
                <div className="flex-1">Horário</div>
                <div className="flex-3">Nome</div>
                <div className="flex-1">Responsável</div>
                <div className="flex-1">Cancelar</div>
            </div>

            <div className="container-linhas flex flex-col">
                {isMobile ? (
                    // Mobile: apenas uma linha visível
                    <div className="linha max-w-[412px] w-full bg-gray-400/10 text-sm flex flex-col rounded !pt-1 !pr-4 !pl-4">
                        <div className="flex items-center">
                            <button
                                onClick={prevLinha}
                                className="bg-gray-700 text-white !px-3 !py-1 rounded"
                            >
                                ◀
                            </button>
                            <p className="flex-1 !px-10">{linhas[currentIndex].horario}</p>
                            <div className="flex gap-1">

                                <button
                                    onClick={nextLinha}
                                    className="bg-gray-700 text-white !px-3 !py-1 rounded"
                                >
                                    ▶
                                </button>
                            </div>
                        </div>
                        <input
                            className="bg-neutral-900 w-full h-10 rounded-lg !pl-2 mb-2"
                            type="text"
                            name="Nome"
                            placeholder="Nome"
                        />
                        <input
                            className="bg-neutral-900 w-full h-10 rounded-lg !pl-2 mb-2"
                            type="password"
                            name="Senha"
                            placeholder="Pass"
                        />
                        <input
                            className="bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-800 border-1 border-x-neutral-500/50 border-y-neutral-700/70 w-12 h-10 rounded-lg"
                            type="button"
                            value="X"
                        />
                    </div>
                ) : (
                    // Desktop: todas as linhas, horizontal, sem gap vertical extra
                    linhas.map((linha) => (
                        <div
                            key={linha.id}
                            className="linha h-15 max-w-[928px] w-5xl max-md:w-[706px] max-sm:w-95 bg-gray-400/10 text-lg flex items-center"
                        >
                            <p className="flex-1">{linha.horario}</p>
                            <div className="nome flex-3">
                                <input
                                    className="bg-neutral-900 w-sm h-10 rounded-lg !pl-2"
                                    type="text"
                                    name="Nome"
                                    placeholder="Nome"
                                />
                            </div>
                            <div className="senha  flex-1">
                                <input
                                    className="bg-neutral-900 w-full h-10 rounded-lg !pl-2"
                                    type="password"
                                    name="Senha"
                                    placeholder="Pass"
                                />
                            </div>
                            <div className="cancel flex-1">
                                <input
                                    className="bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-800 border-1 border-x-neutral-500/50 border-y-neutral-700/70 w-12 h-10 rounded-lg"
                                    type="button"
                                    value="X"
                                />
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
