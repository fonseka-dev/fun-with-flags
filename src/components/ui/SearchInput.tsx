"use client";

type SearchInputProps = {
  id?: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export function SearchInput({
  id = "country-search",
  label,
  value,
  onChange,
  placeholder = "Search countries…",
}: SearchInputProps) {
  return (
    <div className="relative w-full sm:w-64">
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        id={id}
        name="country-search"
        type="search"
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="bg-surface-container-high rounded-full px-6 py-2 w-full
          text-on-surface placeholder:text-outline
          focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
      />
      <span aria-hidden="true" className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none">
        search
      </span>
    </div>
  );
}
