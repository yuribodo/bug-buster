import ChatInput from '@/components/ChatInput';
import ChatSideBar from '@/components/ChatSideBar';

const page = () => {
  return (
    <div className="flex justify-center min-h-screen max-h-screen bg-zinc-950 text-gray-100">
      <ChatInput />
      <ChatSideBar />
    </div>
  );
};

export default page;
