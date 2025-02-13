type props = {
  content: string;
  messager: string;
};

const Message = ({ content, messager }: props) => {
  return (
    <div
      className={` p-2 rounded-lg text-bold w-fit max-w-[80%] ${messager === 'AI' ? 'self-start bg-zinc-600' : 'self-end bg-blue-600'}`}
    >
      {content}
    </div>
  );
};

export default Message;
