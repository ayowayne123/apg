"use client";

import { useRouter, useSearchParams } from "next/navigation";

type Props = {
  title: string;
  paramKey: string;
  options: string[];
};

export default function FilterCheckbox({ title, paramKey, options }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const toggle = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    const current = params.get(paramKey)?.split(",") || [];

    const updated = current.includes(value)
      ? current.filter((v) => v !== value)
      : [...current, value];

    if (updated.length === 0) {
      params.delete(paramKey);
    } else {
      params.set(paramKey, updated.join(","));
    }

    router.push(`?${params.toString()}`);
  };

  const selected = searchParams.get(paramKey)?.split(",") || [];

  return (
    <div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <div className="space-y-2">
        {options.map((opt) => (
          <label key={opt} className="flex gap-2 text-sm">
            <input
              type="checkbox"
              checked={selected.includes(opt)}
              onChange={() => toggle(opt)}
            />
            {opt}
          </label>
        ))}
      </div>
    </div>
  );
}
