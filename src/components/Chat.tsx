import Message from './Message';

const messageHistory = [
  {
    id: 1,
    content: 'Hello World!',
    messager: 'AI',
  },
  {
    id: 2,
    content: 'In the bleak midwinter...',
    messager: 'Human',
  },
  {
    id: 3,
    content:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed earum veniam non libero? Impedit quidem laudantium delectus aperiam, facere itaque quibusdam, ullam nesciunt repellendus libero quo natus nulla soluta consequuntur.',
    messager: 'AI',
  },
  {
    id: 4,
    content: 'Hello World!',
    messager: 'human',
  },
];

const Chat = () => {
  return (
    <div className=" flex-1 flex flex-col gap-4 w-4/5 md:w-2/5  self-center  rounded-md p-5 overflow-scroll m-10">
      {messageHistory.map((message) => (
        <Message
          key={message.id}
          content={message.content}
          messager={message.messager}
        />
      ))}
    </div>
  );
};

export default Chat;
