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
                className="w-full h-10 bg-neutral-900 text-white !px-4 !py-3 rounded-lg flex justify-between items-center shadow-md hover:bg-neutral-800 transition"
            >
                <span className="uppercase">{diaSelecionado}</span>
                <ChevronDown
                    size={20}
                    className={`transition-transform ${aberto ? "rotate-180" : ""}`}
                />
            </button>

            {/* Dropdown animado */}
            <AnimatePresence>
                {aberto && (
                    <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute w-full mt-1 bg-neutral-800 text-white rounded-lg shadow-lg overflow-hidden z-20 flex flex-col gap-1"
                    >
                        {diasSemana.map((dia) => (
                            <li
                                key={dia}
                                onClick={() => selecionarDia(dia)}
                                className="px-4 py-3 hover:bg-neutral-700 cursor-pointer transition"
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
