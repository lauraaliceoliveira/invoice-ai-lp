"use client";

import { GridContainer } from "../GridContainer";
import Image from "next/image";
import { ItemMenu } from "./ItemMenu";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "../LanguageSwitcher";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("navbar");

  const menuItems = [
    { url: "#home", title: t("home") },
    { url: "#features", title: t("features") },
    { url: "#how-it-works", title: t("howItWorks") },
    { url: "#pricing", title: t("pricing") },
    { url: "#faq", title: t("faq") },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="sticky top-0 w-full h-[80px] z-50 bg-white border-b border-b-gray-100 flex items-center">
      <GridContainer className="flex items-center justify-between">
        <div className="w-full xl:w-auto flex items-center justify-between gap-10">
          <Image src="/logo.svg" alt="logo" width={142} height={32} />

          <nav className="hidden xl:flex items-center gap-8">
            {menuItems.map(({ url, title }, index) => (
              <ItemMenu key={index} url={url} title={title} />
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {/* LanguageSwitcher visível só no mobile */}
            <div className="block xl:hidden">
              <LanguageSwitcher />
            </div>

            <button
              onClick={toggleMenu}
              className="block xl:hidden cursor-pointer"
            >
              <Image
                src="/hamburger.svg"
                width={40}
                height={40}
                alt="menu-hamburger"
              />
            </button>
          </div>
        </div>

        {/* Botões do desktop */}
        <div className="gap-9 hidden xl:flex items-center">
          <button className="text-gray-600 hover:opacity-50 transition-opacity font-medium cursor-pointer"></button>

          <button className="py-3 px-4 bg-[#0283FA] rounded-lg text-white font-semibold leading-normal hover:bg-blue-600 transition-colors cursor-pointer">
            {t("startFreeTrial")}
          </button>

          {/* LanguageSwitcher visível só no desktop */}
          <LanguageSwitcher />
        </div>
      </GridContainer>

      {/* Sidebar menu for mobile */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex flex-col p-6 space-y-4">
          <button onClick={toggleMenu} className="self-end mb-4">
            <FontAwesomeIcon icon={faX} />
          </button>
          {menuItems.map(({ url, title }, index) => (
            <ItemMenu key={index} url={url} title={title} />
          ))}
        </div>
      </div>

      {/* Overlay to close sidebar */}
      {isOpen && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 bg-black opacity-50 z-40"
        ></div>
      )}
    </header>
  );
}
