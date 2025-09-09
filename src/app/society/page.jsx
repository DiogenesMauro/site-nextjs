"use client";
import { Botao } from "./header";
import { Linhas } from "./linhas";
import ReactLenis from "@studio-freight/react-lenis";

const Society = () => {
    return (
        <ReactLenis root>
            <div className="full-container society">
                <div className="scale-society scale-90 backdrop-blur-3xl">

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