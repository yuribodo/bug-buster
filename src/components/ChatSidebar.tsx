'use client';

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import useWindowWidth from '@/hooks/useWindowWidth';
import { PanelRightClose as OpenSidebar } from 'lucide-react';
import { PanelRightOpen as CloseSideBar } from 'lucide-react';
import ChatsList from './ChatsList';

const ChatSidebar = () => {
  const windowWidth = useWindowWidth();
  return (
    <div className="p-2">
      <Sheet>
        <SheetTrigger className="">
          <OpenSidebar size={windowWidth > 1000 ? 35 : 30} />
        </SheetTrigger>
        <SheetContent side={'left'} className="bg-zinc-800 flex flex-col">
          <div className="w-full flex justify-end">
            <SheetClose>
              <CloseSideBar size={windowWidth > 1000 ? 35 : 30} color="white" />
            </SheetClose>
          </div>
          <SheetHeader>
            <SheetTitle className="text-white">Access your chats</SheetTitle>
            <SheetDescription className="text-white">
              Here you will see your chats
            </SheetDescription>
          </SheetHeader>
          <div>
            <ChatsList />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default ChatSidebar;
