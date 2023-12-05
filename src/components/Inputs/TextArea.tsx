import type { UseFormRegister } from "react-hook-form";

interface TextAreaProps {
  id: string;
  label: string;
  register: UseFormRegister<any>;
  placeholder?: string;
}

export default function TextArea({
  id,
  label,
  register,
  placeholder,
}: TextAreaProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="input" className="text-sm">
        {label}
      </label>
      <textarea
        {...register(id)}
        id={id}
        placeholder={placeholder}
        className="
          mt-1 min-h-[250px] w-full
          rounded-sm border-2 border-black
          focus:outline-none focus:ring-1
          focus:ring-gray-100 focus:ring-offset-0
        "
      />
    </div>
  );
}
