'use client';
import { useState, useRef, useEffect } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { SendHorizonal } from 'lucide-react';

const ChatInput = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [prompt, setPrompt] = useState('');

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const windowWidthHandler = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth;
    }
  };

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);

    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      const newHeight = Math.min(textareaRef.current.scrollHeight, 200);
      textareaRef.current.style.height = `${newHeight}px`;
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPrompt('');
  };

  return (
    <label className="bg-zinc-800 flex flex-row self-end w-4/5 md:w-2/5 m-2 rounded-lg p-3">
      <form onSubmit={(e) => handleSubmit(e)} className="p-2 flex w-full">
        <textarea
          ref={textareaRef}
          placeholder="Type here..."
          className=" bg-zinc-800 overflow-y-auto resize-none rounded-lg p-2 outline-none w-full"
          value={prompt}
          onChange={(e) => handleInput(e)}
        />
        <button
          type="submit"
          className={` ${prompt ? 'hover:scale-110' : ''} disabled:opacity-30 justify-end`}
          disabled={!prompt}
        >
          <SendHorizonal size={windowWidth! > 1000 ? 32 : 25} />
        </button>
      </form>
    </label>
  );
};

export default ChatInput;
