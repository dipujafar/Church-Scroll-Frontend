import React, { useState, KeyboardEvent } from "react";
import { X } from "lucide-react";

interface TagInputProps {
  value: string[]; // Ensure the value prop is an array of strings
  onChange: (value: string[]) => void;
}

export const TagInput: React.FC<TagInputProps> = ({ value = [], onChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      event.preventDefault();
      onChange([...value, inputValue.trim()]);
      setInputValue("");
    }
  };

  const removeTag = (index: number) => {
    onChange(value.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-wrap items-center gap-2 p-2 border rounded-md bg-gray-100">
      {value.map((tag, index) => (
        <span
          key={index}
          className="flex items-center bg-primary-blue text-white px-2 py-1 rounded-md"
        >
          {tag}
          <button
            type="button"
            onClick={() => removeTag(index)}
            className="ml-1 hover:text-red-500"
          >
            <X size={16} />
          </button>
        </span>
      ))}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-grow outline-none h-8 bg-gray-100"
        placeholder="Type and press enter to add tags"
      />
    </div>
  );
};
