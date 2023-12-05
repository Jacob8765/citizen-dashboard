import type { UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  label: string;
  register: UseFormRegister<any>;
  password?: boolean;
}

export default function Input({ id, label, register, password }: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="input" className="text-sm">
        {label}
      </label>
      <input
        {...register(id)}
        id={id}
        className="
          mt-1 h-10 w-full
          rounded-sm border-2 border-black
          focus:outline-none focus:ring-1
          focus:ring-gray-100 focus:ring-offset-0
        "
        type={password ? "password" : "text"}
      />
    </div>
  );
}
