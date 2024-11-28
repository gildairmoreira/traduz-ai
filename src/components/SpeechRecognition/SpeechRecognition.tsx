'use client';

import React, { useEffect, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { IconMicrophone } from "@tabler/icons-react";

interface SpeechRecognitionComponentProps {
  setSourceText: (text: string) => void;
}

const SpeechRecognitionComponent: React.FC<SpeechRecognitionComponentProps> = ({ setSourceText }) => {
  const [isListening, setIsListening] = useState(false);
  
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  // Update text when transcript changes
  useEffect(() => {
    if (transcript) {
      console.log('Novo texto reconhecido:', transcript);
      setSourceText(transcript);
    }
  }, [transcript, setSourceText]);

  // Update listening state
  useEffect(() => {
    setIsListening(listening);
  }, [listening]);

  const handleListen = async () => {
    try {
      if (!browserSupportsSpeechRecognition) {
        console.error('Navegador não suporta reconhecimento de voz');
        return;
      }

      if (isListening) {
        console.log('Parando reconhecimento de voz...');
        await SpeechRecognition.stopListening();
      } else {
        console.log('Iniciando reconhecimento de voz...');
        resetTranscript();
        await SpeechRecognition.startListening({
          continuous: true,
          language: 'pt-BR'
        });
      }
    } catch (error) {
      console.error('Erro no reconhecimento de voz:', error);
    }
  };

  if (!browserSupportsSpeechRecognition) {
    return (
      <div title="Navegador não suporta reconhecimento de voz">
        <IconMicrophone
          size={22}
          className="cursor-not-allowed text-gray-300"
        />
      </div>
    );
  }

  return (
    <div>
      <IconMicrophone
        size={22}
        className={`cursor-pointer ${isListening ? "text-red-500" : "text-gray-400"} hover:text-gray-600`}
        onClick={handleListen}
      />
    </div>
  );
};

export default SpeechRecognitionComponent;