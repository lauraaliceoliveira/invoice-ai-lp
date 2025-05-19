import { useTranslations } from "next-intl";
import { GridContainer } from "../GridContainer";
import { Question } from "./Question";

export function FAQ() {
  const t = useTranslations("faq");

  return (
    <section id="faq" className="pt-16 xl:pt-24 pb-16 w-full">
      <GridContainer>
        <div className="text-center mb-20 mxl:b-16">
          <span className="inline-block py-1 px-3 mb-6 bg-[#0283FA] rounded-2xl text-sm/snug text-white">
            {t("name")}
          </span>
          <h2 className="text-3xl xl:text-4xl font-semibold text-gray-900 mt-4 mb-6">
            {t("title")}
          </h2>
          <p className="mx-auto text-lg/relaxed xl:text-xl/normal text-gray-600 max-w-3xl">
            {t("subtitle")}
          </p>
        </div>
        <div className="w-full max-w-3xl mx-auto">
          <Question
            title={t("firstQuestion")}
            response={t("firstAnswer")}
          />
          <Question
            title={t("secondQuestion")}
            response={t("secondAnswer")}
          />
          <Question
            title={t("thirdQuestion")}
            response={t("thirdAnswer")}
          />
          <Question
            title={t("fourthQuestion")}
            response={t("fourthAnswer")}
          />
          <Question
            title={t("fifthQuestion")}
            response={t("fifthAnswer")}
          />
        </div>
      </GridContainer>
    </section>
  );
}
