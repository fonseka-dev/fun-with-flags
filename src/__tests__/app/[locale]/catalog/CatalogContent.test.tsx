import { useState } from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { CatalogContent } from "@/app/[locale]/catalog/CatalogContent";
import type { Continent, Country } from "@/data/types";

const mockUseCountries = vi.fn();
const mockUseContinentFilter = vi.fn();

function createMockCountry(index: number, continent: Continent, name = `Country ${index}`): Country {
  return {
    slug: `country-${index}`,
    flagCode: `c${index}`,
    continent,
    population: `${index}M`,
    region: `Region ${index}`,
    name,
    capital: `Capital ${index}`,
    flagDescription: `Flag description ${index}`,
    funFacts: [],
  };
}

const mockCountries: Country[] = [
  createMockCountry(1, "Europe", "Afghanistan"),
  ...Array.from({ length: 29 }, (_, index) => createMockCountry(index + 2, "Europe")),
  ...Array.from({ length: 10 }, (_, index) => createMockCountry(index + 31, "Asia")),
];

vi.mock("next-intl", () => ({
  useTranslations: () => (key: string) => key,
}));

vi.mock("@/lib/providers/CountriesProvider", () => ({
  useCountries: () => mockUseCountries(),
}));

vi.mock("@/lib/hooks/useContinentFilter", () => ({
  useContinentFilter: () => mockUseContinentFilter(),
}));

vi.mock("@/components/layout/AppShell", () => ({
  AppShell: ({
    children,
    searchQuery,
    onSearchChange,
    onContinentSelect,
  }: {
    children: React.ReactNode;
    searchQuery?: string;
    onSearchChange?: (value: string) => void;
    onContinentSelect?: (continent: "Europe" | null) => void;
  }) => (
    <div>
      <label htmlFor="catalog-search">catalog-search</label>
      <input
        id="catalog-search"
        value={searchQuery ?? ""}
        onChange={(event) => onSearchChange?.(event.target.value)}
      />
      <button type="button" onClick={() => onContinentSelect?.("Europe") }>
        continent-filter
      </button>
      {children}
    </div>
  ),
}));

vi.mock("@/components/catalog/CountryGrid", () => ({
  CountryGrid: ({ countries }: { countries: Array<{ slug: string; name: string }> }) => (
    <div>
      {countries.map((country) => (
        <button key={country.slug} type="button" aria-label="exploreCulture">
          {country.name}
        </button>
      ))}
    </div>
  ),
}));

describe("CatalogContent", () => {
  beforeEach(() => {
    mockUseCountries.mockReset();
    mockUseContinentFilter.mockReset();

    mockUseCountries.mockReturnValue({
      countries: mockCountries,
    });

    mockUseContinentFilter.mockImplementation(() => {
      const [activeContinent, setContinent] = useState<Continent | null>(null);

      return {
        activeContinent,
        setContinent,
      };
    });
  });

  it("renders an initial batch, expands on demand, and resets when search or continent changes", async () => {
    render(<CatalogContent />);

    expect(screen.getAllByRole("button", { name: "exploreCulture" })).toHaveLength(24);

    fireEvent.click(screen.getByRole("button", { name: "loadMore" }));

    expect(screen.getAllByRole("button", { name: "exploreCulture" })).toHaveLength(40);

    fireEvent.change(screen.getByLabelText("catalog-search"), {
      target: { value: "Afghanistan" },
    });

    expect(screen.getAllByRole("button", { name: "exploreCulture" })).toHaveLength(1);
    expect(screen.queryByRole("button", { name: "loadMore" })).not.toBeInTheDocument();

    fireEvent.change(screen.getByLabelText("catalog-search"), {
      target: { value: "" },
    });

    expect(screen.getAllByRole("button", { name: "exploreCulture" })).toHaveLength(24);
    expect(screen.getByRole("button", { name: "loadMore" })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "loadMore" }));

    expect(screen.getAllByRole("button", { name: "exploreCulture" })).toHaveLength(40);

    fireEvent.click(screen.getByRole("button", { name: "continent-filter" }));

    expect(screen.getAllByRole("button", { name: "exploreCulture" })).toHaveLength(24);
    expect(screen.getByRole("button", { name: "loadMore" })).toBeInTheDocument();
  });
});