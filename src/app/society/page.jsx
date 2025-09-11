"use client";
import { SelectorDias } from "./seletor";
import { Botao } from "./header";
import { Linhas } from "./linhas";
import ReactLenis from "@studio-freight/react-lenis";
import { AnimatedBox, CadSoc } from "./cadastro";


const Society = () => {
    return (
        <ReactLenis root>
            <div className="table society">
                <div className="scale-90 backdrop-blur-3xl">
                    {/*DROPDOWN*/}
                    <SelectorDias />

                    {/*HEADER*/}
                    <Botao />

                    {/*CONTEÚDO LINHAS*/}
                    <Linhas />

                </div>
                <div className="flex absolute" >
                    <CadSoc />
                </div>
            </div>
        </ReactLenis>
    )
}

export default Society