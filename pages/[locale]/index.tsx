import React from "react";

import { useTranslation, I18NLink } from "i18next-ssg";
import { makeStaticProps, getStaticPaths } from "i18next-ssg/server";
import LocaleSwitcher from "components/LocaleSwitcher";

export default function Page() {
  const { t } = useTranslation("common");
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-8 text-3xl font-bold text-neutral-800">
      <div>{t("title")}</div>
      <I18NLink href="/sansa">
        <span className="cursor-pointer text-slate-700 underline">
          {t("people.sansa")}
        </span>
      </I18NLink>
      <I18NLink href="/arya">
        <span className="cursor-pointer text-slate-700 underline">
          {t("people.arya")}
        </span>
      </I18NLink>
      <LocaleSwitcher />
    </div>
  );
}

const getStaticProps = makeStaticProps(["common"]);
export { getStaticPaths, getStaticProps };
