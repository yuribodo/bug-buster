'use client';
import { motion } from 'framer-motion';

type props = {
  content: string;
  messager: string;
};

const Message = ({ content, messager }: props) => {
  return (
    <>
      <motion.div
        className={` p-2 rounded-lg text-bold w-fit max-w-[80%] ${messager === 'AI' ? 'self-start bg-zinc-600' : 'self-end bg-blue-600'}`}
        initial={{ scale: 0.1 }}
        animate={{ scale: 1 }}
      >
        {content}
      </motion.div>
    </>
  );
};

export default Message;
