import Image from "next/image";
import { GridContainer } from "../GridContainer";
import { ItemHowItWorks } from "./ItemHowItWorks";
import { useTranslations } from "next-intl";


export function HowItWorks() {
  const t = useTranslations("howItWorks");

  const sections = [
    {
      title: t("capture"),
      description: t("captureDescription"),
      features: [
        t("noManualData"),
        t("captureInvoices"),
        t("fasterAndMore"),
      ],
      imageSrc: "/how-it-works-1.svg",
      imageLeft: false,
      imageWidth: 377,
      imageHeight: 445,
    },
    {
      title: t("automateExpense"),
      description: t("automateExpenseDescription"),
      features: [
        t("connectTools"),
        t("automaticCategorization"),
        t("reduceError"),
      ],
      imageSrc: "/how-it-works-2.svg",
      imageLeft: true,
      imageWidth: 458,
      imageHeight: 398,
    },
    {
      title: t("realtimeInsights"),
      description: t("realtimeInsightsDescription"),
      features: [
        t("realtimeDashboards"),
        t("customizableReports"),
        t("aiPoweredInsights"),
      ],
      imageSrc: "/how-it-works-3.svg",
      imageLeft: false,
      imageWidth: 578,
      imageHeight: 360,
    },
  ];

  return (
    <section id="how-it-works">
      <GridContainer>
        <div className="text-center py-16 xl:py-24">
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

        <div className="space-y-0 xl:space-y-30 lg:space-y-30 text-center lg:text-start xl:text-start">
          {sections.map((section, index) => (
            <ItemHowItWorks
              key={index}
              title={section.title}
              description={section.description}
              features={section.features}
              imageSrc={section.imageSrc}
              imageLeft={section.imageLeft}
              imageWidth={section.imageWidth}
              imageHeight={section.imageHeight}
            />
          ))}
        </div>
      </GridContainer>
    </section>
  );
}
