import Chat from '@/components/Chat';
import ChatInput from '@/components/ChatInput';
import ChatSidebar from '@/components/ChatSidebar';

const page = () => {
  return (
    <div className="flex justify-between flex-col h-screen bg-zinc-950 text-gray-100 overflow-hidden">
      <div className="absolute">
        <ChatSidebar />
      </div>
      <Chat />
      <ChatInput />
    </div>
  );
};

export default page;
