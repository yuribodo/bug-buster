import { Textarea } from "@/components/ui/textarea";
import { SendHorizontal } from "lucide-react";

const ChatInput = () => {
  return (
    <div className="flex  h-24 w-[90%] md:w-2/5 md:h-28 md:max-h-44  bg-slate-800 justify-center items-start absolute bottom-6 rounded-2xl p-4 overflow-auto">
      <Textarea placeholder="Type here" />
      <div className="flex flex-col justify-center h-full hover:scale-125 transition-transform ">
        <SendHorizontal size={32} />
      </div>
    </div>
  );
};

export default ChatInput;
