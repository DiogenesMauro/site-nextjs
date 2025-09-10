"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function DropdownDias() {
    const diasSemana = [
        "SEGUNDA-FEIRA",
        "TERÇA-FEIRA",
        "QUARTA-FEIRA",
        "QUINTA-FEIRA",
        "SEXTA-FEIRA",
        "SÁBADO",
        "DOMINGO",
    ];

    const [diaSelecionado, setDiaSelecionado] = useState(diasSemana[0]);
    const [aberto, setAberto] = useState(false);

    const toggleDropdown = () => setAberto(!aberto);
    const selecionarDia = (dia) => {
        setDiaSelecionado(dia);
        setAberto(false);
    };

    return (
        <div className="relative w-64">
            {/* Botão principal */}
            <button
                onClick={toggleDropdown}
                className="w-full h-10 bg-neutral-900 border-1 border-x-neutral-500/50 border-y-neutral-700/70 text-white !px-4 !py-3 rounded-lg flex justify-center items-center shadow-md hover:bg-neutral-800 transition"
            >
                <span className="uppercase">{diaSelecionado}</span>

            </button>

            {/* Dropdown animado */}
            <AnimatePresence>
                {aberto && (
                    <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute w-full mt-2 z-20 flex flex-col gap-0.5"
                    >
                        {diasSemana.map((dia) => (
                            <li
                                key={dia}
                                onClick={() => selecionarDia(dia)}
                                className="w-full h-10 bg-neutral-900 border-1 border-x-neutral-500/50 border-y-neutral-700/70 hover:bg-neutral-700 text-white !px-4 !py-2 rounded-lg shadow cursor-pointer text-center transition"
                            >
                                {dia}
                            </li>
                        ))}
                    </motion.ul>

                )}
            </AnimatePresence>
        </div>
    );
}
