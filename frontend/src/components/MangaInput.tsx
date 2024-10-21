"use client";

import React, { useState, useRef, useEffect } from "react";

const MangaInput = () => {
  const [inputHeight, setInputHeight] = useState("40px");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = inputHeight;
    }
  }, [inputHeight]);

  const handleInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "40px";
      const scrollHeight = textareaRef.current.scrollHeight;
      setInputHeight(`${scrollHeight}px`);
    }
  };

  return (
    <div className="relative w-full transition-colors contain-inline-size rounded-[26px] p-2 bg-[#1e1c26] flex items-center min-h-[60px]">
      <textarea
        ref={textareaRef}
        placeholder="Outline the plot for your manga..."
        className="w-full bg-transparent text-white placeholder:text-[#a29db8] focus:outline-none text-base font-normal leading-normal resize-none overflow-hidden py-2 pr-[100px] pl-4"
        style={{ height: inputHeight }}
        onInput={handleInput}
      />
      <button
        type="button"
        className="absolute right-2 bg-[#4526E3] text-white rounded-full px-2 py-2 hover:bg-[#3a20c2] whitespace-nowrap mr-1"
      >
        Create ✨
      </button>
    </div>
  );
};

export default MangaInput;
