"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";

export default function PricingTable() {
  const t = useTranslations("pricing");
  const label = useTranslations("pricing.labels");
  const [selectedPlan, setSelectedPlan] = useState("Business");

  const planKeys = ["Free", "Starter", "Pro", "Business", "Enterprise"];

  const plans = planKeys.map((key) => ({
    name: key,
    label: t(`plans.${key}`),
    price: t(`prices.${key}`),
  }));

  const features = [
    { key: "Smart OCR", values: [true, true, true, true, true] },
    {
      key: "Mobile Capture (Photo Upload)",
      values: [true, true, true, true, true],
    },
    { key: "PDF Upload & Parsing", values: [true, true, true, true, true] },
    {
      key: "Automatic Categorization",
      values: [true, label("Limited"), true, true, true],
    },
    { key: "Custom Categories", values: [true, false, true, true, true] },
    { key: "AI Cost Classification", values: [true, false, true, true, true] },
    { key: "Tax Summary PDF", values: [true, false, true, true, true] },
    { key: "Auto Tax Declaration", values: [true, false, true, true, true] },
    { key: "Audit Trail", values: [true, false, true, true, true] },
    { key: "One-Click Payments", values: [true, false, true, true, true] },
    {
      key: "Scheduled Auto-Payments",
      values: [true, false, false, true, true],
    },
    {
      key: "Payment Link Generator",
      values: [true, false, false, true, true],
    },
    {
      key: "QuickBooks, Xero, Stripe Integration",
      values: [true, false, true, true, true],
    },
    { key: "API Access", values: [true, false, true, true, true] },
    {
      key: "Custom Integration Support",
      values: [true, false, false, label("Limited"), true],
    },
    {
      key: "User Seats",
      values: ["1", "1", "1", "10", label("Unlimited")],
    },
    {
      key: "Live Chat Support",
      values: [label("Limited"), label("Limited"), true, true, true],
    },
    {
      key: "Dedicated Success Manager",
      values: [true, false, false, false, true],
    },
    { key: "SLA & Compliance", values: [true, false, false, false, true] },
  ];

  const renderValue = (value: boolean | string) => {
    if (value === true)
      return <FontAwesomeIcon icon={faCheck} className="text-green-500" />;
    if (value === false)
      return <FontAwesomeIcon icon={faTimes} className="text-red-500" />;
    return <span className="text-gray-600">{value}</span>;
  };

  return (
    <section className="pb-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Mobile - Slider */}
        <div className="block lg:hidden">
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            spaceBetween={16}
            slidesPerView={1}
          >
            {plans.map((plan) => {
              const isSelected = plan.name === selectedPlan;
              return (
                <SwiperSlide key={plan.name}>
                  <div
                    className={`bg-white shadow-sm rounded-lg p-8 ${
                      isSelected
                        ? "border-2 border-[#0283FA]"
                        : "border border-slate-200"
                    }`}
                  >
                    <div className="text-xl text-[#181D27] font-semibold text-center">
                      {plan.label}
                    </div>
                    <div className="text-2xl font-bold text-blue-600 text-center mt-1">
                      {plan.price}
                    </div>

                    <ul className="mt-4 space-y-2 text-base text-[#535862]">
                      {features.map((feature, idx) => (
                        <li key={idx} className="flex justify-between pt-2">
                          <span>{t(`features.${feature.key}`)}</span>
                          {renderValue(
                            feature.values[planKeys.indexOf(plan.name)]
                          )}
                        </li>
                      ))}
                    </ul>

                    <button
                      onClick={() => setSelectedPlan(plan.name)}
                      className={`mt-10 mb-10 w-full px-4 py-2 rounded ${
                        isSelected
                          ? "bg-[#0283FA] text-white hover:bg-blue-700 cursor-pointer"
                          : "bg-[#D1E9FE] text-[#0283FA] font-semibold hover:bg-gray-300 cursor-pointer"
                      }`}
                    >
                      {isSelected ? t("button.selected") : t("button.select")}
                    </button>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* Desktop - Table */}
        <div className="hidden lg:block">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left p-4 border-b border-[#E9EAEB]"></th>
                {plans.map((plan) => {
                  const isSelected = plan.name === selectedPlan;
                  return (
                    <th
                      key={plan.name}
                      className={`text-start p-4 border-b border-[#E9EAEB] ${
                        isSelected ? "bg-blue-50" : ""
                      }`}
                    >
                      <div className="text-lg font-semibold">{plan.label}</div>
                      <div className="text-3xl font-bold text-[#181D27] mt-1">
                        {plan.price}
                      </div>
                      <button
                        onClick={() => setSelectedPlan(plan.name)}
                        className={`mt-3 px-6 py-2 rounded-lg w-full ${
                          isSelected
                            ? "bg-[#0283FA] text-white font-medium hover:bg-blue-70 cursor-pointer"
                            : "bg-[#D1E9FE] text-[#0283FA] font-medium hover:bg-gray-300 cursor-pointer"
                        }`}
                      >
                        {isSelected ? t("button.selected") : t("button.select")}
                      </button>
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {features.map((feature) => (
                <tr key={feature.key}>
                  <td className="p-3 border-t border-[#E9EAEB] text-base font-medium text-[#535862] text-left">
                    {t(`features.${feature.key}`)}
                  </td>
                  {feature.values.map((value, index) => {
                    const isSelected = plans[index].name === selectedPlan;
                    return (
                      <td
                        key={index}
                        className={`text-center p-3 border-t border-[#E9EAEB] ${
                          isSelected ? "bg-blue-50" : ""
                        }`}
                      >
                        {renderValue(value)}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-center mt-12">
          <button className="w-1/2 px-6 py-3 bg-[#0283FA] text-white hover:bg-blue-700 cursor-pointer rounded-lg">
            {t("button.continue")}
          </button>
        </div>
      </div>
    </section>
  );
}
