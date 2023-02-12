import React from "react";
import { useRouter } from "next/router";

import { useTranslation, Trans, I18NLink, localize } from "i18next-ssg";
import { makeStaticProps, getStaticPaths } from "i18next-ssg/server";

import LocaleSwitcher from "components/LocaleSwitcher";

function Page() {
  const router = useRouter();
  const { t } = useTranslation("common", {
    keyPrefix: "arya",
  });
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-8 text-3xl font-bold text-neutral-800">
      <div>{t("title")}</div>
      <div>
        <span>{`<I18NLink/>`}: </span>
        <Trans i18nKey="arya.target">
          My sister is
          <I18NLink href="/sansa">Sansa</I18NLink>
        </Trans>
      </div>
      <div>
        <span>router.push(): </span>
        <Trans i18nKey="arya.target">
          My sister is
          <span
            className="cursor-pointer text-slate-700 underline"
            onClick={() => {
              router.push(localize("/sansa"));
            }}
          >
            Sansa
          </span>
        </Trans>
      </div>
      <LocaleSwitcher />
    </div>
  );
}

export default Page;

const getStaticProps = makeStaticProps(["common"]);
export { getStaticPaths, getStaticProps };
