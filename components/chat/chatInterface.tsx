"use client";
import { EnterIcon, LeftBackArrow, RightArrow } from "@/icons/arrows";
import { useState } from "react";
import {
  Avatar,
  AvatarBadge,
  AvatarFallback,
  AvatarImage,
} from "../[ui]/avatar";
import { AvatarIcon } from "./avatar";
import { ChatBox } from "./chatBox";
import { cn } from "@/utils/clsx";

export const ChatInterface = ({
    className
}: {
    className?: string
}) => {
  const [message, setMessage] = useState<string>("");

  return (
    <div className={cn("flex flex-col h-150 w-150 rounded-lg px-4 py-2 bg-gray-500/10 border border-gray-500/30", className)}>
      <div className="w-full flex gap-2 items-center p-2">
        <div>
          <LeftBackArrow className="size-4" />
        </div>
        <div className="flex items-center gap-4">
          {/* <div className="rounded-full w-10 h-10 bg-gray-500/10 border border-gray-500/30"></div> */}
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
            <AvatarBadge className="bg-green-600 dark:bg-green-800" />
          </Avatar>
          <div>
            <span className="text-md font-semibold">Anushka</span>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-500/10"></div>

      <div className="w-full h-full px-2 py-4 flex gap-2">
        <AvatarIcon/>
        <div><ChatBox message="Hii How are you" /></div>
      </div>
      <section className="w-full reply mb-2 gap-2">
        <div className="flex gap-4">
          <input
            type="text"
            className="w-full border-gray-500/30 border outline-none focus:outline-none rounded-2xl px-4 h-10"
            placeholder="Enter your message....."
            name=""
            id=""
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
          <div className="border border-gray-500/10 h-10 w-10 rounded-full flex items-center justify-center bg-white text-black">
            <EnterIcon className="size-4" />
          </div>
        </div>
      </section>
    </div>
  );
};
