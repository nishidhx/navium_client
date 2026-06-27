import Image from "next/image";
import { AvatarIcon } from "./avatar";

export const CustomAvatar = ({ href }: { href?: string }) => {
    return (
        <div className="shrink-0">
            {href?.trim() ? (
                <Image src={href} alt="user" width={32} height={32} unoptimized className="h-8 w-8 rounded-full object-cover" />
            ) : (
                <AvatarIcon href={href} />
            )}
        </div>
    );
};