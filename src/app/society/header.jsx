import { useState } from "react";

export function Botao() {
    const [selecionado, setSelecionado] = useState("1");

    return (
        <div className="head !pb-4 max-w-[928px]">
            <div className="h-15 w-1 bg-gray-800/90"></div>
            <div className="h-15 w-1.5 bg-gray-800/90"></div>
            <div className="h-15 w-3 bg-gray-800/90"></div>
            <div className="!px-10 h-15 w-4xl flex items-center justify-between
                     bg-gray-800/90 max-md:w-2xl max-sm:w-95 text-2xl tracking-widest">
                SOCIETY
                <div className="select text-lg flex items-center gap-4 h-full">
                    <input
                        type="button"
                        value="1"
                        className={selecionado === "1" ? "ativo" : ""}
                        onClick={() => setSelecionado("1")}
                    />
                    <input
                        type="button"
                        value="2"
                        className={selecionado === "2" ? "ativo" : ""}
                        onClick={() => setSelecionado("2")}
                    />
                </div>
            </div>
        </div>

    );
}
