import { ChevronRight } from "lucide-react";
import { GridContainer } from "../GridContainer";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section
      id="home"
      className="py-16 xl:pt-24 xl:pb-0 bg-[url('/background.svg')] bg-cover bg-center"
    >
      <GridContainer>
        <div className="text-center flex flex-col items-center mb-16">
          <h1 className="text-4xl xl:text-6xl font-bold text-gray-900 mt-4 mb-6">
          {t("title")}
          </h1>
          <p className="text-lg/relaxed xl:text-xl/6 text-gray-600 max-w-3xl mx-auto mb-12">
            {t("subtitle")}
          </p>
          <button className="w-full sm:w-auto xl:w-auto flex items-center justify-center gap-3 py-4 px-7 bg-[#0283FA] rounded-lg text-lg font-medium text-white hover:bg-blue-600 transition-colors cursor-pointer">
            {t("button")}
            <ChevronRight />
          </button>
        </div>

        <Image
          src="/macbook.svg"
          width={768}
          height={448}
          alt="mac"
          className="hidden md:block xl:block mx-auto"
        />

        <Image
          src="/macbook-mobile.svg"
          width={343}
          height={280}
          alt="mac mobile"
          className="block md:hidden xl:hidden mx-auto"
        />
      </GridContainer>
    </section>
  );
}
