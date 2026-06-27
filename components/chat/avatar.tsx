import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "../[ui]/avatar";

const DEFAULT_AVATAR_URL = "https://github.com/shadcn.png";

export const AvatarIcon = ({ href }: { href?: string }) => {
  const imageSrc = href?.trim() ? href : DEFAULT_AVATAR_URL;

  return (
    <Avatar>
      <AvatarImage src={imageSrc} alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
      <AvatarBadge className="bg-green-600 dark:bg-green-800" />
    </Avatar>
  );
};
