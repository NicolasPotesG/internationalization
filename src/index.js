import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

import JobsList from "./components/jobsList";

let userLanguage = window.navigator.language;
let locale = "es-ES";
let messages = localeEsMessages;

if (userLanguage !== "es-ES" && userLanguage !== "es") {
  locale = "en";
  messages = localeEnMessages;
}

ReactDOM.render(
  <IntlProvider locale={locale} messages={messages}>
    <JobsList language={locale} />
  </IntlProvider>,
  document.getElementById("root")
);
