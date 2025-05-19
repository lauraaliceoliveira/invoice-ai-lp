import { useTranslations } from "next-intl";
import { GridContainer } from "../GridContainer";

export function Trial() {
  const t = useTranslations("trial");

  return (
    <section className="py-16 xl:py-24 bg-gray-50">
      <GridContainer className="text-center">
        <h2 className="text-3xl xl:text-4xl font-semibold text-gray-900 mb-5">
          {t("title")}
        </h2>
        <p className="text-lg/relaxed xl:text-xl/6 text-gray-600 mb-10">
          {t("subtitle")}
        </p>
        <div className="flex flex-col-reverse sm:flex-row xl:flex-row w-full xl:w-auto gap-3 justify-center">
          <button className="py-3 px-4 bg-white border border-gray-300 rounded-lg text-gray-700 font-semibold leading-normal hover:bg-gray-100 transition-colors cursor-pointer">
            {t("learnMore")}
          </button>
          <button className="py-3 px-4 bg-blue-500 rounded-lg text-white font-semibold leading-normal hover:bg-blue-600 transition-colors cursor-pointer">
            {t("getStarted")}
          </button>
        </div>
      </GridContainer>
    </section>
  );
}
