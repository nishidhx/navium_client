import { cn } from "@/utils/clsx";


export const ChatBox = ({
    className,
    textStyles,
    message
}: {
    className?: string;
    message?: string;
    textStyles?: string;
}) => {
    return <div className="flex items-center justify-center px-4 w-fit h-10 rounded-md bg-gray-500/10">
        <p className={cn("text-sm", textStyles)}>{message}</p>
    </div>
}