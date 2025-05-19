"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faGlobe } from "@fortawesome/free-solid-svg-icons";

const localeData: { code: string; name: string; flag: string }[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "pt", name: "Português", flag: "🇧🇷" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "it", name: "Italiano", flag: "🇮🇹" },
  { code: "zh", name: "中文", flag: "🇨🇳" },
  { code: "ja", name: "日本語", flag: "🇯🇵" },
  { code: "ko", name: "한국어", flag: "🇰🇷" },
  { code: "ru", name: "Русский", flag: "🇷🇺" },
  { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
  { code: "tr", name: "Türkçe", flag: "🇹🇷" },
];

export function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [currentLocale, setCurrentLocale] = useState("en");

  useEffect(() => {
    const locale = pathname.split("/")[1];
    setCurrentLocale(locale);
  }, [pathname]);

  const current =
    localeData.find((l) => l.code === currentLocale) ?? localeData[0];

  const handleSelect = (locale: string) => {
    setIsOpen(false);
    if (locale !== currentLocale) {
      router.replace(pathname, { locale });
    }
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="inline-flex justify-center items-center py-4 px-4 bg-white text-sm font-medium rounded-md hover:bg-gray-50"
      >
        <FontAwesomeIcon
          icon={faGlobe}
          size="lg"
          className="mr-2 text-gray-600"
        />
        {/* <span className="mr-1">{current.flag}</span> */}
        <FontAwesomeIcon
          icon={faChevronDown}
          size="sm"
          className="mr-2 text-gray-600"
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 max-h-80 bg-white z-50 overflow-y-auto shadow-lg rounded-md">
          {localeData.map((locale) => (
            <button
              key={locale.code}
              onClick={() => handleSelect(locale.code)}
              className={`w-full text-left px-4 py-2 text-sm flex items-center transition-colors duration-200
                ${
                  locale.code === currentLocale
                    ? "font-semibold text-white bg-[#0283FA]"
                    : "text-gray-600 hover:bg-[#0283FA] hover:text-white"
                }`}
            >
              <span className="mr-2">{locale.flag}</span>
              {locale.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
