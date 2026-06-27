import { EnterIcon, LeftBackArrow } from "@/icons/arrows";
import { ChatMember, ChatRenderer, MessageProps } from "./ChatRenderer";
import { cn } from "@/lib/utils";
import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "../[ui]/avatar";
import { CustomAvatar } from "./CustomAvatar";


interface ShowCaseComp {
    className?: string;
}

export const chatMember: ChatMember = {
  name: "John Doe",
  memberType: "RECEIVER",
};

const senderAvatar =
  "/image.png";

const receiverAvatar = "/anushka.png"

export const messages: MessageProps[] = [
  {
    message: "Good morning cutiee 🌞❤️",
    type: "SEND",
    avatarUrl: senderAvatar,
    timestamp: "2026-06-27T09:00:00.000Z",
  },
  {
    message: "Uth gayi ya abhi bhi blanket se breakup nahi hua? 😂",
    type: "SEND",
    avatarUrl: senderAvatar,
    timestamp: "2026-06-27T09:00:00.000Z",
  },

  {
    message: "😂😂 Uth gayi hu.",
    type: "RECEIVE",
    avatarUrl: receiverAvatar,
    timestamp: "2026-06-27T09:00:20.000Z",
  },
  {
    message: "Aur tum itni subah yaad kaise aa gaye?",
    type: "RECEIVE",
    avatarUrl: receiverAvatar,
    timestamp: "2026-06-27T09:00:20.000Z",
  },

  {
    message: "Yaad? Bro tu toh background process ki tarah 24x7 run karti rehti hai mere dimaag mein. 😭❤️",
    type: "SEND",
    avatarUrl: senderAvatar,
    timestamp: "2026-06-27T09:00:55.000Z",
  },

  {
    message: "Smooth banne ki koshish kar rahe ho? 😏",
    type: "RECEIVE",
    avatarUrl: receiverAvatar,
    timestamp: "2026-06-27T09:01:15.000Z",
  },

  {
    message: "Koshish nahi...",
    type: "SEND",
    avatarUrl: senderAvatar,
    timestamp: "2026-06-27T09:01:45.000Z",
  },
  {
    message: "Talent hai. 😌✨",
    type: "SEND",
    avatarUrl: senderAvatar,
    timestamp: "2026-06-27T09:01:45.000Z",
  },

  {
    message: "Confidence toh Elon Musk se bhi zyada hai tum mein. 😂",
    type: "RECEIVE",
    avatarUrl: receiverAvatar,
    timestamp: "2026-06-27T09:02:10.000Z",
  },

  {
    message: "Confidence nahi...",
    type: "SEND",
    avatarUrl: senderAvatar,
    timestamp: "2026-06-27T09:02:40.000Z",
  },
  {
    message: "Tumhari wajah se aura +100 ho gaya hai. ❤️",
    type: "SEND",
    avatarUrl: senderAvatar,
    timestamp: "2026-06-27T09:02:40.000Z",
  },
  {
    message: "Ab batao coffee kab? ☕😌",
    type: "SEND",
    avatarUrl: senderAvatar,
    timestamp: "2026-06-27T09:02:40.000Z",
  },

  {
    message: "Buttering level: MAX 😂",
    type: "RECEIVE",
    avatarUrl: receiverAvatar,
    timestamp: "2026-06-27T09:03:15.000Z",
  },
  {
    message: "But coffee sounds nice... 👀❤️",
    type: "RECEIVE",
    avatarUrl: receiverAvatar,
    timestamp: "2026-06-27T09:03:15.000Z",
  },

  {
    message: "Done. Saturday 5 PM? 😌",
    type: "SEND",
    avatarUrl: senderAvatar,
    timestamp: "2026-06-27T09:04:00.000Z",
  },

  {
    message: "Dekhte hain... pehle batao treat kiski? 😂",
    type: "RECEIVE",
    avatarUrl: receiverAvatar,
    timestamp: "2026-06-27T09:04:30.000Z",
  },

  {
    message: "Obviously meri.",
    type: "SEND",
    avatarUrl: senderAvatar,
    timestamp: "2026-06-27T09:04:55.000Z",
  },
  {
    message: "Bas tum time pe aa jana.",
    type: "SEND",
    avatarUrl: senderAvatar,
    timestamp: "2026-06-27T09:04:55.000Z",
  },

  {
    message: "Main toh aa jaungi...",
    type: "RECEIVE",
    avatarUrl: receiverAvatar,
    timestamp: "2026-06-27T09:05:25.000Z",
  },
  {
    message: "Late tum hi hote ho har baar. 🙄",
    type: "RECEIVE",
    avatarUrl: receiverAvatar,
    timestamp: "2026-06-27T09:05:25.000Z",
  },

  {
    message: "Character assassination ho rahi hai yaha. 😭",
    type: "SEND",
    avatarUrl: senderAvatar,
    timestamp: "2026-06-27T09:05:50.000Z",
  },

  {
    message: "Facts bol rahi hu bas. 💅",
    type: "RECEIVE",
    avatarUrl: receiverAvatar,
    timestamp: "2026-06-27T09:06:15.000Z",
  },

  {
    message: "Accha sun...",
    type: "SEND",
    avatarUrl: senderAvatar,
    timestamp: "2026-06-27T09:06:45.000Z",
  },
  {
    message: "Agar main late hua na...",
    type: "SEND",
    avatarUrl: senderAvatar,
    timestamp: "2026-06-27T09:06:45.000Z",
  },
  {
    message: "Toh ek extra dessert meri taraf se. 🍰",
    type: "SEND",
    avatarUrl: senderAvatar,
    timestamp: "2026-06-27T09:06:45.000Z",
  },

  {
    message: "Ab ye hui na baat. 😂❤️",
    type: "RECEIVE",
    avatarUrl: receiverAvatar,
    timestamp: "2026-06-27T09:07:10.000Z",
  },

  {
    message: "Waise...",
    type: "RECEIVE",
    avatarUrl: receiverAvatar,
    timestamp: "2026-06-27T09:07:30.000Z",
  },
  {
    message: "Tum hoodie pehen ke aana.",
    type: "RECEIVE",
    avatarUrl: receiverAvatar,
    timestamp: "2026-06-27T09:07:30.000Z",
  },

  {
    message: "Kyu? 👀",
    type: "SEND",
    avatarUrl: senderAvatar,
    timestamp: "2026-06-27T09:07:55.000Z",
  },

  {
    message: "Because you look extra cute in it. 🥺❤️",
    type: "RECEIVE",
    avatarUrl: receiverAvatar,
    timestamp: "2026-06-27T09:08:20.000Z",
  },

  {
    message: "Bas itni si baat?",
    type: "SEND",
    avatarUrl: senderAvatar,
    timestamp: "2026-06-27T09:08:50.000Z",
  },
  {
    message: "Ab toh wahi pehen ke aaunga. 😎",
    type: "SEND",
    avatarUrl: senderAvatar,
    timestamp: "2026-06-27T09:08:50.000Z",
  },

  {
    message: "Awww. ❤️",
    type: "RECEIVE",
    avatarUrl: receiverAvatar,
    timestamp: "2026-06-27T09:09:15.000Z",
  },
  {
    message: "See you soon, idiot. 🫶",
    type: "RECEIVE",
    avatarUrl: receiverAvatar,
    timestamp: "2026-06-27T09:09:15.000Z",
  },

  {
    message: "See you, pretty girl. ❤️",
    type: "SEND",
    avatarUrl: senderAvatar,
    timestamp: "2026-06-27T09:09:40.000Z",
  },
];
export const ShowCaseComp = () => {

    return <div className="flex min-h-screen w-screen items-center justify-center bg-black px-4 py-6">
        <div className={cn("flex h-[95vh] w-full max-w-150 flex-col rounded-lg border border-gray-500/30 bg-gray-500/10 px-4 py-2 text-white")}>
      <div className="w-full flex gap-2 items-center p-2">
        <div>
          <LeftBackArrow className="size-4" />
        </div>
        <div className="flex items-center gap-4">
          {/* <div className="rounded-full w-10 h-10 bg-gray-500/10 border border-gray-500/30"></div> */}
          <CustomAvatar href={receiverAvatar}></CustomAvatar>
          <div>
            <span className="text-md font-semibold">Anushka</span>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-500/10"></div>

      {/* <div className="w-full h-full px-2 py-4 flex gap-2">
        <AvatarIcon/>
        <div><ChatBox message="Hii How are you" /></div>
      </div> */}

        <div className="flex-1 overflow-hidden">
          <ChatRenderer chartMembers={chatMember} messages={messages} />
        </div>

      <section className="mt-auto w-full border-t border-gray-500/10 py-2">
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
    </div>
}