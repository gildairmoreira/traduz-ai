'use client'

import TextArea from "@/components/Inputs/TextArea";
import { ChangeEvent, useState } from "react";

export default function Home() {

  const [sourceText, setSourceText] = useState("");

  return (
    <div className="w-full bg-black bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="relative overflow-hidden h-screen">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold  text-neutral-200">
              Traduz<span className="text-[#f87315]">AI</span>
            </h1>

            <p className="mt-3 text-neutral-400">
              TraduzAI: unindo vozes, Conectando Você ao Mundo.
            </p>

            <div className="mt-7 sm:mt-12 mx-auto max-w-3xl relative">
              <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                <div className="relative z-10 flex flex-col space-x-3 p-3  border rounded-lg shadow-lg  bg-neutral-900 border-neutral-700 shadow-gray-900/20">

                  <TextArea
                    id="source-language"
                    value={sourceText}
                    onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                      setSourceText(e.target.value)
                    }
                    placeholder="Source Language"
                  />

                  <div className="flex flex-row justify-between w-full">
                    <span className="cursor-pointer flex space-x-2 flex-row">
                      <SpeechRecognitionComponent
                        setSourceText={setSourceText}
                      />
                      <IconVolume
                        size={22}
                        onClick={() => handleAudioPlayback(sourceText)}
                      />
                      <FileUpload handleFileUpload={handleFileUpload} />
                      <LinkPaste handleLinkPaste={handleLinkPaste} />
                    </span>
                    <span className="text-sm pr-4">
                      {sourceText.length} / 2000
                    </span>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}




{/*<div className="mt-7 sm:mt-12 mx-auto max-w-3xl relative">
            <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
              <div className="relative z-10 flex flex-col space-x-3 p-3  border rounded-lg shadow-lg  bg-neutral-900 border-neutral-700 shadow-gray-900/20">
                <TextArea
                  id="source-language"
                  value={sourceText}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                    setSourceText(e.target.value)
                  }
                  placeholder="Source Language"
                />
                <div className="flex flex-row justify-between w-full">
                  <span className="cursor-pointer flex space-x-2 flex-row">
                    <SpeechRecognitionComponent
                      setSourceText={setSourceText}
                    />
                    <IconVolume
                      size={22}
                      onClick={() => handleAudioPlayback(sourceText)}
                    />
                    <FileUpload handleFileUpload={handleFileUpload} />
                    <LinkPaste handleLinkPaste={handleLinkPaste} />
                  </span>
                  <span className="text-sm pr-4">
                    {sourceText.length} / 2000
                  </span>
                </div>
              </div>

              <div className="relative z-10 flex flex-col space-x-3 p-3  border rounded-lg shadow-lg  bg-neutral-900 border-neutral-700 shadow-gray-900/20">
                <TextArea
                  id="target-language"
                  value={targetText}
                  onChange={() => {}}
                  placeholder="Target Language"
                />
                <div className="flex flex-row justify-between w-full">
                  <span className="cursor-pointer flex items-center space-x-2 flex-row">
                    <LanguageSelector
                      selectedLanguage={selectedLanguage}
                      setSelectedLanguage={setSelectedLanguage}
                      languages={languages}
                    />
                    <IconVolume
                      size={22}
                      onClick={() => handleAudioPlayback(targetText)}
                    />
                  </span>
                  <div className="flex flex-row items-center space-x-2 pr-4 cursor-pointer">
                    <IconCopy size={22} onClick={handleCopyToClipboard} />
                    {copied && (
                      <span className="text-xs text-green-500">Copied!</span>
                    )}
                    <IconThumbUp size={22} onClick={handleLike} />
                    <IconThumbDown size={22} onClick={handleDislike} />
                    <IconStar
                      size={22}
                      onClick={handleFavorite}
                      className={favorite ? "text-yellow-500" : ""}
                    />
                  </div>
                </div>
              </div>
            </div>

            <SvgDecorations />
          </div>

          {*\<CategoryLinks />  */}