"use client"
import { cn } from "@/utils/clsx";
import { SelectContent, SelectItem, Select, SelectTrigger, SelectValue } from "./select";

interface FileInputProps {
  className?: string;
  placeholder: string;
  type: string;
  name: string;
}

export const Field = ({
  text,
  className,
  children,
}: {
  text?: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("w-full flex flex-col gap-1", className)}>
      <label htmlFor="">
        <h1 className="text-white/80">{text}</h1>
      </label>
      {children}
    </div>
  );
};

export const FieldSelect = ({
    className
}: {
    className?: string
}) => {
    return <div className="w-full">
        <Select defaultValue="us">
              <SelectTrigger id="form-country" className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">United States</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="In">India</SelectItem>
                <SelectItem value="Ptgl">Portugal</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
              </SelectContent>
            </Select>
    </div>
}

export const FieldInput = ({
  className,
  placeholder,
  type,
  name,
}: FileInputProps) => {
  return (
    <div className="w-full">
      <input
        placeholder={placeholder}
        type={type}
        name={name}
        id=""
        className={cn(
          "text-white w-full bg-gray-500/10 px-4 py-1 rounded-lg border border-gray-500/20 placeholder-text-secondary outline-none",
          className,
        )}
      />
    </div>
  );
};
