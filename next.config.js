/** @type {import('next').NextConfig} */

const { i18n } = require("./next-i18next.config");

module.exports = {
  env: {
    NEXT_PUBLIC_I18N: i18n
  }
};
