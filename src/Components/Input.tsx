
import { useId, useState } from 'react';

interface InputProps {
  value: string;
  label: string;
  type?: 'text' | 'email' | 'password';
  setValue: (value: string) => void;
  name?: string;
  required?: boolean;
}

export default function Input({ value, setValue, label, type = 'text', name, required = true }: InputProps) {
  const reactId = useId();
  const inputId = name ?? `${label.replace(/\s+/g, '-').toLowerCase()}-${reactId}`;
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const isFilled = value.trim().length > 0;
  const isPassword = type === 'password';
  const shouldFloat = isFocused || isFilled;

  return (
    <div className="relative w-full">
      <input
        id={inputId}
        name={name}
        type={isPassword && !showPassword ? 'password' : 'text'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        required={required}
        className="peer w-full rounded-sm bg-gray-200 mt-4 px-4 py-3 pt-4 text-gray-900 shadow-sm transition focus:outline-none focus:ring-2 "
        aria-label={label}
        autoComplete={type === 'password' ? 'current-password' : undefined}
      />

      <label
        htmlFor={inputId}
        className={`pointer-events-none absolute left-4 text-gray-900 transition-all duration-150 ${
          shouldFloat ? 'top-4 text-xs text-blue-600' : 'top-7/12 -translate-y-1/2 text-sm'
        }`}
      >
        {label}
      </label>

      {isPassword && (
        <button
          type="button"
          className="absolute right-3 top-8/12 -translate-y-1/2 rounded-md px-3 py-1 text-sm font-semibold text-blue-600 transition hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-600/30"
          onClick={() => setShowPassword((prev) => !prev)}
          aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
          aria-pressed={showPassword}
        >
          {showPassword ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 3l18 18" />
              <path d="M10.6 10.6A2 2 0 0 0 9 12a2 2 0 0 0 3.4 1.4" />
              <path d="M9.88 5.09A9.12 9.12 0 0 1 12 5c7 0 10 7 10 7a15.66 15.66 0 0 1-1.67 2.68" />
              <path d="M6.61 6.61C4.27 8 2 12 2 12a16.28 16.28 0 0 0 5.17 5.11" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          )}
        </button>
      )}
    </div>
  );
}