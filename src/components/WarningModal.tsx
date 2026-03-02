"use client";
import React, { useState, useEffect } from "react";
import { IconAlertTriangle, IconX } from "@tabler/icons-react";

const WarningModal: React.FC = () => {
    // Inicializa como true para que apareça sempre ao recarregar a página
    const [isOpen, setIsOpen] = useState(true);
    const [mounted, setMounted] = useState(false);

    // Evita erros de hidratação (hydration mismatch) em Next.js
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <>
            {/* Botão de aviso discreto flutuante que aparece quando o modal é fechado */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    aria-label="Reabrir aviso"
                    className="fixed bottom-6 right-6 z-40 p-3 bg-neutral-900/80 backdrop-blur-sm border border-neutral-800 rounded-full shadow-xl shadow-black/50 text-red-500 hover:text-red-400 hover:scale-110 active:scale-95 transition-all duration-200 flex items-center justify-center group"
                    title="Ver o aviso sobre a descontinuidade do projeto"
                >
                    <IconAlertTriangle size={24} className="group-hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
                </button>
            )}

            {/* Janela Modal do Aviso */}
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-6 transition-opacity">
                    <div className="relative w-full max-w-lg md:max-w-xl bg-neutral-900 border border-neutral-700 rounded-2xl shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-300">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 sm:top-5 sm:right-5 text-neutral-400 hover:text-white hover:bg-neutral-800 p-1.5 rounded-full transition-colors focus:outline-none"
                            aria-label="Fechar modal"
                        >
                            <IconX size={24} />
                        </button>

                        <div className="flex flex-col items-center text-center space-y-5">
                            <div className="p-4 bg-red-500/10 rounded-full border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                                <IconAlertTriangle size={50} className="text-red-500 shrink-0" />
                            </div>

                            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-200 tracking-tight">
                                Aviso de Descontinuidade
                            </h2>

                            <div className="space-y-4 text-neutral-400 text-sm sm:text-base leading-relaxed text-left sm:text-center mt-2 px-1">
                                <p>
                                    Prezado visitante, informamos que a operação funcional deste projeto foi descontinuada.
                                </p>
                                <p>
                                    Devido a atualizações recentes na <strong>API do Google Gemini</strong>, que estabeleceram limites mais rigorosos de requisições em sua versão gratuita, a arquitetura do aplicativo tornou-se obsoleta para o uso prático contínuo.
                                </p>
                                <p className="text-neutral-300 font-medium">
                                    O sistema permanece acessível exclusivamente como parte do meu portfólio de engenharia de software.
                                </p>
                            </div>

                            <button
                                onClick={() => setIsOpen(false)}
                                className="mt-8 w-full py-3.5 px-4 bg-orange-600 text-white font-semibold rounded-xl hover:bg-orange-500 transition-all duration-200 focus:ring-4 focus:ring-orange-500/40 active:scale-[0.98] shadow-lg shadow-orange-500/20"
                            >
                                Compreendi, acessar o projeto
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default WarningModal;
