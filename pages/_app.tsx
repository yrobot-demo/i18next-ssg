import React from "react";
import { appWithTranslation } from "i18next-ssg";

import "./global.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
