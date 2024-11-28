import { useEffect, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_OPENAI_API_KEY || '');

const useTranslate = (sourceText: string, selectedLanguage: string): string => {
  const [targetText, setTargetText] = useState<string>("");

  useEffect(() => {
    const handleTranslate = async (text: string): Promise<void> => {
      try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `Você receberá um texto para traduzir. Este texto é: "${text}". 
        Suas tarefas são:
        - Detectar o idioma original do texto.
        - Traduzir o texto para ${selectedLanguage}.
        - Fornecer uma tradução natural, interpretando o contexto, gírias e expressões idiomáticas, sem usar traduções literais. 
        Não retorne nada além do texto traduzido.`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const data = response.text();
        
        setTargetText(data || "");
      } catch (error) {
        console.error('Erro ao traduzir:', error);
      }
    };

    if (sourceText.trim()) {
      const timeoutId = setTimeout(() => {
        handleTranslate(sourceText);
      }, 500);

      return () => clearTimeout(timeoutId);
    }
  }, [sourceText, selectedLanguage]);

  return targetText;
};

export default useTranslate;