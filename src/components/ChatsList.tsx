import React from 'react';
import ChatListItem from './ChatListItem';

const chats = [
  { title: 'This is a chat', id: 1 },
  { title: 'This is another chat', id: 2 },
  { title: 'This is a longer chat right here', id: 3 },
  { title: 'This is a veeeery loooooooooooooong chaaaaaaaaaat', id: 4 },
  { title: 'This is a chat', id: 5 },
];

const ChatsList = () => {
  return (
    <div>
      <ul className="flex flex-col gap-2">
        {chats.map((chat) => (
          <ChatListItem key={chat.id} title={chat.title} />
        ))}
      </ul>
    </div>
  );
};

export default ChatsList;
