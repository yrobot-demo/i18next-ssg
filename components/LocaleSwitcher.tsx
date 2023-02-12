import React from "react";
import Link from "next/link";
import { useLocaleSwitcher, setUserLocale } from "i18next-ssg";

const localeMap: Record<Locale, string> = {
  en: "English",
  zh: "中文",
};

const DropdownContent = ({
  options,
}: {
  options: {
    label: string;
    path: string;
    locale: Locale;
  }[];
}) => (
  <>
    {options.map(({ label, path, locale }) => (
      <li key={path}>
        <Link href={path}>
          <span
            onClick={() => {
              setUserLocale(locale);
            }}
          >
            {label}
          </span>
        </Link>
      </li>
    ))}
  </>
);

function LocaleSwitcher() {
  const { label, options } = useLocaleSwitcher({ localeMap });
  return (
    <div className="group fixed left-8 top-8">
      <label tabIndex={0} className="text-2xl">
        {label}
      </label>
      <ul tabIndex={0} className="hidden list-disc text-base group-hover:block">
        <DropdownContent options={options} />
      </ul>
    </div>
  );
}

export default LocaleSwitcher;
