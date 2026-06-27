import { cn } from "@/lib/utils";
import { ChatBox } from "./chatBox";
import { CustomAvatar } from "./CustomAvatar";

export interface MessageProps {
    message: string;
    type: "RECEIVE" | "SEND";
    avatarUrl: string;
    timestamp: string;
}

export interface ChatMember {
    name: string;
    memberType: "RECEIVER" | "SENDER";
}

interface ChatRendererProps {
    className?: string;
    chartMembers: ChatMember;
    messages: MessageProps[];
}

export const ChatRenderer = (props: ChatRendererProps) => {
    const sortedMessages = [...props.messages].sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());

    const formatTimestamp = (timestamp: string) => {
        const date = new Date(timestamp);

        if (Number.isNaN(date.getTime())) {
            return timestamp;
        }

        return new Intl.DateTimeFormat("en", {
            hour: "numeric",
            minute: "2-digit",
        }).format(date);
    };

    return (
        <div className="flex h-full w-full flex-col overflow-y-auto px-2 py-2 scrollbar-none [&::-webkit-scrollbar]:hidden">
            {props.chartMembers && props.messages && (
                sortedMessages.map((message, index) => {
                    const isLastMessageForTimestamp = index === sortedMessages.length - 1 || sortedMessages[index + 1].timestamp !== message.timestamp;

                    return (
                        <div
                            key={`${message.timestamp}-${index}`}
                            className="my-2 flex w-full flex-col gap-1"
                        >
                            <div
                                className={cn(
                                    "flex w-full items-end gap-2",
                                    message.type === "RECEIVE" ? "justify-start" : "flex-end flex-row-reverse"
                                )}
                            >
                                <CustomAvatar href={message.avatarUrl} />
                                <ChatBox message={message.message} />
                            </div>
                            {isLastMessageForTimestamp && (
                                <div className={cn("px-2 text-[11px] text-gray-400", message.type === "RECEIVE" ? "self-start" : "self-end")}>{formatTimestamp(message.timestamp)}</div>
                            )}
                        </div>
                    );
                })
            )}
        </div>
    );
};