"use client";

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export function SearchInput({
  value,
  onChange,
  placeholder = "Search countries...",
}: SearchInputProps) {
  return (
    <div className="relative">
      <label htmlFor="country-search" className="sr-only">
        Search countries
      </label>
      <input
        id="country-search"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="bg-surface-container-high rounded-full px-6 py-2 w-64
          text-on-surface placeholder:text-outline
          focus:ring-2 focus:ring-primary focus:outline-none"
      />
      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none">
        search
      </span>
    </div>
  );
}
