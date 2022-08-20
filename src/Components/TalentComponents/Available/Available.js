import React from "react";
import CustomButtonwithoutbackground from "./../CustomButtonwithoutbackground/CustomButton";
import { useTranslation } from "react-i18next";

export default function Available() {
  const { t } = useTranslation();
  return (
    <>
      <div className="container card mt-3">
        <section>
          <h5>{t("You earned it! Where should we deliver your balance?")}</h5>
        </section>
        <CustomButtonwithoutbackground headers={t("Set Up Payments")} />
        <div className="row text-center">
          <p>{t("No transactions in the last 30 days.")}</p>
        </div>
      </div>
    </>
  );
}
