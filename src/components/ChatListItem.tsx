import { motion } from 'framer-motion';

type ChatListItemProps = {
  title: string;
};

function ChatListItem({ title }: ChatListItemProps) {
  return (
    <motion.li
      className="p-2 text-bold text-white rounded-md bg-zinc-900 hover:scale-110"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.9 }}
    >
      {title}
    </motion.li>
  );
}

export default ChatListItem;
