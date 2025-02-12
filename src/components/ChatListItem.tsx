type ChatListItemProps = {
  title: string;
};

function ChatListItem({ title }: ChatListItemProps) {
  return (
    <li className="p-2 text-bold text-white rounded-md bg-zinc-900">{title}</li>
  );
}

export default ChatListItem;
