import * as React from "react";
import { cn } from "@/lib/utils";

interface SelectProps {
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
}

interface SelectTriggerProps {
  className?: string;
  children: React.ReactNode;
}

interface SelectContentProps {
  children: React.ReactNode;
}

interface SelectItemProps {
  value: string;
  children: React.ReactNode;
}

interface SelectValueProps {
  placeholder?: string;
}

// Simple context-free select implementation
let currentSelectProps: { value?: string; onValueChange?: (value: string) => void } = {};

const Select = ({ value, onValueChange, children }: SelectProps) => {
  currentSelectProps = { value, onValueChange };
  return <div className="relative">{children}</div>;
};

const SelectTrigger = ({ className, children }: SelectTriggerProps) => {
  return (
    <div
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
    >
      {children}
    </div>
  );
};

const SelectValue = ({ placeholder }: SelectValueProps) => {
  const { value } = currentSelectProps;
  
  if (!value) {
    return <span className="text-muted-foreground">{placeholder}</span>;
  }
  
  return <span>{value}</span>;
};

const SelectContent = ({ children }: SelectContentProps) => {
  return (
    <select
      value={currentSelectProps.value || ""}
      onChange={(e) => currentSelectProps.onValueChange?.(e.target.value)}
      className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
    >
      {children}
    </select>
  );
};

const SelectItem = ({ value, children }: SelectItemProps) => {
  return <option value={value}>{children}</option>;
};

export {
  Select,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectItem,
};
