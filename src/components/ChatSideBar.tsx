'use client';

import { motion, useAnimationControls } from 'framer-motion';
import { PanelRightClose as OpenPanel } from 'lucide-react';
import { PanelRightOpen as ClosePanel } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const containerVariants = {
  close: {
    width: '5rem',
    transition: {
      type: 'spring',
      damping: 15,
      duration: 0.5,
    },
  },
  open: {
    width: '16rem',
    transition: {
      type: 'spring',
      damping: 15,
      duration: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const ChatSideBar = () => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  const containerControls = useAnimationControls();

  useEffect(() => {
    if (isSideBarOpen) {
      containerControls.start('open');
    } else {
      containerControls.start('close');
    }
  }, [isSideBarOpen, containerControls]);

  const handleOpenClose = () => {
    setIsSideBarOpen((prev) => !prev);
  };

  const chats = [
    {
      id: 1,
      chatTitle: 'How to learn boxing',
    },
    {
      id: 2,
      chatTitle: 'Who killed Julius Caesar?',
    },
    {
      id: 3,
      chatTitle: 'How to make a particle accelerator at home',
    },
    {
      id: 4,
      chatTitle: 'How to meet new people',
    },
  ];

  return (
    <motion.div
      className="bg-zinc-900 flex flex-col z-10 gap-10 py-8 px-2 absolute top-0 left-0 h-full shadow shadow-neutral-600"
      variants={containerVariants}
      initial="close"
      animate={containerControls}
    >
      <motion.button
        className="hover:scale-125 transition-transform self-end"
        onClick={handleOpenClose}
      >
        {isSideBarOpen ? <ClosePanel size={34} /> : <OpenPanel size={34} />}
      </motion.button>

      {isSideBarOpen && (
        <>
          {/* Title */}
          <motion.div
            className="text-xl font-bold self-center"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            BugBuster AI
          </motion.div>

          {/* Chat List */}
          <motion.div
            className="flex flex-col gap-5 w-full justify-center"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            {chats.map((chat) => (
              <motion.div
                key={chat.id}
                className="bg-zinc-700 rounded-xl p-2 font-bold overflow-hidden"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 + chat.id * 0.1 }}
              >
                {chat.chatTitle}
              </motion.div>
            ))}
          </motion.div>

          {/* Avatar */}
          <motion.div
            className="flex justify-center align-bottom mt-auto"
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
          >
            <Avatar>
              <AvatarImage src="profile.png" sizes="5" />
              <AvatarFallback />
            </Avatar>
          </motion.div>
        </>
      )}
    </motion.div>
  );
};

export default ChatSideBar;
