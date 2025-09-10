"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function SelectorDias() {
    const diasSemana = [
        "SEGUNDA-FEIRA",
        "TERÇA-FEIRA",
        "QUARTA-FEIRA",
        "QUINTA-FEIRA",
        "SEXTA-FEIRA",
        "SÁBADO",
        "DOMINGO",
    ];

    const [indice, setIndice] = useState(0);
    const [direcao, setDirecao] = useState(0); // controla para onde o carrossel vai

    const diaSelecionado = diasSemana[indice];

    const anterior = () => {
        setDirecao(-1);
        setIndice((prev) => (prev === 0 ? diasSemana.length - 1 : prev - 1));
    };

    const proximo = () => {
        setDirecao(1);
        setIndice((prev) => (prev === diasSemana.length - 1 ? 0 : prev + 1));
    };

    // Variantes para animar horizontalmente
    const variants = {
        enter: (direcao) => ({
            x: direcao > 0 ? 50 : -50,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.3, ease: "easeInOut" },
        },
        exit: (direcao) => ({
            x: direcao > 0 ? -50 : 50,
            opacity: 0,
            transition: { duration: 0.3, ease: "easeInOut" },
        }),
    };

    return (
        <div className="flex items-center justify-center max-w-[928px] w-5xl max-md:w-[706px] max-sm:w-95">
            {/* Botão esquerda */}
            <button
                onClick={anterior}
                className="setaesquerda w-12 !py-2 text-white flex justify-end"
            >
                <ChevronLeft size={20} />
            </button>

            {/* Texto animado */}
            <div className="relative w-56 h-9 bg-gray-800/40 flex items-center justify-center overflow-hidden">
                <AnimatePresence custom={direcao} mode="popLayout">
                    <motion.span
                        key={diaSelecionado}
                        custom={direcao}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="absolute text-lg font-semibold uppercase text-white"
                    >
                        {diaSelecionado}
                    </motion.span>
                </AnimatePresence>
            </div>

            {/* Botão direita */}
            <button
                onClick={proximo}
                className="setadireita w-12 !py-2 text-white flex justify-start"
            >
                <ChevronRight size={20} />
            </button>
        </div>
    );
}
