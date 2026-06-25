// export const Avatar = () => {
//   return <div className="h-10 w-10 bg-white rounded-full"></div>;

import { Avatar, AvatarBadge, AvatarFallback, AvatarImage } from "../[ui]/avatar";

// };
export const AvatarIcon = () => {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
      <AvatarBadge className="bg-green-600 dark:bg-green-800" />
    </Avatar>
  );
};
