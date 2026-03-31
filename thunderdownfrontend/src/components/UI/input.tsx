"use client";
import {
  faEye,
  faEyeSlash,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { KeyboardEvent, useState } from "react";

type Props = {
  placeholder: string;
  value?: string;
  filled?: boolean;
  icon?: IconDefinition;
  password?: boolean;
  onChange?: (newValue: string) => void;
  onEnter?: () => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
};

export const Input = ({
  placeholder,
  password = false,
  value = "",
  icon,
  onChange,
  onEnter,
  onKeyDown,
  onFocus,
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key.toLowerCase() === "enter") {
      onEnter?.();
    }
  };

  return (
    <div
      className={`flex items-center h-10 rounded-2xl border-2 transition-colors border-gray-500 focus-within:border-red-500`}
    >
      {icon && (
        <FontAwesomeIcon icon={icon} className="ml-4 size-6 text-gray-500" />
      )}
      <input
        type={password && !showPassword ? "password" : "text"}
        className="flex-1 outline-none bg-transparent h-full px-4 placeholder-gray-400"
        placeholder={placeholder}
        value={value ?? ""}
        onChange={(e) => onChange?.(e.target.value)}
        onKeyUp={handleKeyUp}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
        autoComplete="off"
        spellCheck="false"
        autoFocus
      />
      {password && (
        <FontAwesomeIcon
          onClick={() => setShowPassword(!showPassword)}
          icon={showPassword ? faEye : faEyeSlash}
          className="cursor-pointer mr-4 size-6 text-gray-500 focus-within:text-red-500"
        />
      )}
    </div>
  );
};