'use client';
import { useState, useRef } from 'react';
import useWindowWidth from '@/hooks/useWindowWidth';
import type { ChangeEvent, FormEvent } from 'react';
import { SendHorizonal } from 'lucide-react';
import { easeIn, motion } from 'framer-motion';

const ChatInput = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [prompt, setPrompt] = useState('');

  const windowWidth = useWindowWidth();

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);

    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      const newHeight = Math.min(textareaRef.current.scrollHeight, 200);
      textareaRef.current.style.height = `${newHeight}px`;
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (prompt !== '') {
        handleSubmit(e as unknown as FormEvent<HTMLFormElement>);
      }
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPrompt('');
  };

  return (
    <motion.label
      className="bg-zinc-800 flex flex-row self-center w-4/5 md:w-2/5 m-2 rounded-lg p-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <form onSubmit={(e) => handleSubmit(e)} className="p-2 flex w-full">
        <textarea
          ref={textareaRef}
          placeholder="Type here..."
          className=" bg-zinc-800 overflow-y-auto resize-none rounded-lg p-2 outline-none w-full"
          value={prompt}
          onChange={(e) => handleInput(e)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <button
          type="submit"
          className={` ${prompt ? 'hover:scale-110' : ''} disabled:opacity-30 justify-end`}
          disabled={!prompt}
        >
          <SendHorizonal size={windowWidth! > 1000 ? 32 : 25} />
        </button>
      </form>
    </motion.label>
  );
};

export default ChatInput;
