"use client";
import { SelectorDias } from "./seletor";
import { Botao } from "./header";
import { Linhas } from "./linhas";
import ReactLenis from "@studio-freight/react-lenis";

const Society = () => {
    return (
        <ReactLenis root>
            <div className="full-container society">
                <div className="backdrop-blur-3xl">
                    {/*DROPDOWN*/}
                    <SelectorDias />

                    {/*HEADER*/}
                    <Botao />

                    {/*CONTEÚDO LINHAS*/}
                    <Linhas />

                </div>
            </div>
        </ReactLenis>
    )
}

export default Society