import ChatInput from '@/components/ChatInput';
import ChatSidebar from '@/components/ChatSidebar';

const page = () => {
  return (
    <div className="flex justify-between flex-col min-h-screen max-h-screen bg-zinc-950 text-gray-100">
      <ChatSidebar />
      <ChatInput />
    </div>
  );
};

export default page;
