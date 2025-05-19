import { Flashlight, Zap } from "lucide-react";
import { GridContainer } from "../GridContainer";
import { ItemFeature } from "./ItemFeature";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faCircleCheck,
  faClock,
  faLink,
  faShield,
  faShieldHalved,
  faThumbTack,
  faZap,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";

export function Features() {
  const t = useTranslations("features")

  return (
    <section id="features" className="pt-16 xl:pt-24 mb-12">
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

        <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-10 gap-y-12 xl:gap-y-20">
          <ItemFeature
            icon={
              <FontAwesomeIcon
                icon={faZap}
                size="2x"
                className="text-[#0283FA]"
              />
            }
            title={t("automatedData")}
            description={t("automatedDataDescription")}
          />

          <ItemFeature
            icon={
              <FontAwesomeIcon
                icon={faCircleCheck}
                size="2x"
                className="text-[#0283FA]"
              />
            }
            title={t("smartApproval")}
            description={t("smartApprovalDescription")}
          />

          <ItemFeature
            icon={
              <FontAwesomeIcon
                icon={faChartLine}
                size="2x"
                className="text-[#0283FA]"
              />
            }
            title={t("financialInsights")}
            description={t("financialInsightsDescription")}
          />

          <ItemFeature
            icon={
              <FontAwesomeIcon
                icon={faLink}
                size="2x"
                className="text-[#0283FA]"
              />
            }
            title={t("seamlessIntegrations")}
            description={t("seamlessIntegrationsDescription")}
          />

          <ItemFeature
            icon={
              <FontAwesomeIcon
                icon={faShieldHalved}
                size="2x"
                className="text-[#0283FA]"
              />
            }
            title={t("fraudDetection")}
            description={t("fraudDetectionDescription")}
          />

          <ItemFeature
            icon={
              <FontAwesomeIcon
                icon={faClock}
                size="2x"
                className="text-[#0283FA]"
              />
            }
            title={t("acceleratedPayments")}
            description={t("acceleratedPaymentsDescription")}
          />
        </div>
      </GridContainer>
    </section>
  );
}
