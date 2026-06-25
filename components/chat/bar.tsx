import React from "react";

export const Bar = ({
  className,
  icon,
  title,
}: {
  className?: string;
  icon: React.ReactElement;
  title: string;
}) => {
  return <div className="w-50 hover:bg-white/10 tranistion-colors duration-150 flex gap-2 items-center justify-center border border-gray-500/20 h-10 rounded-lg">
    {icon} <p className="text-white">{title}</p>
  </div>;
};
