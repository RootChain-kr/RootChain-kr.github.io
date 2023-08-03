import { createContext, useEffect, useState } from "react";

import en from "assets/locales/en";
import ko from "assets/locales/ko";
import { defaultSettings } from "assets/data";

export const AppContext = createContext();

const IntlProvider = ({ children }) => {
  const [data, setData] = useState(en);
  const [language, setLanguage] = useState(defaultSettings.language);

  const updateLanguage = () => {
    if (language == "en") {
      setLanguage("ko");
      setData(ko);
    } else {
      setLanguage("en");
      setData(en);
    }
  };

  const splitStr = (str) => {
    const strArr = str.split("{br}");

    if (strArr.length > 0) {
      return strArr.map((text, index) => {
        return (
          <span key={index}>
            {text}
            <br />
          </span>
        );
      });
    } else {
      return str;
    }
  };

  const getTranslated = (section, id) => {
    const targetStr = data[section][id];

    if (typeof targetStr == "string") return splitStr(targetStr);
    else return targetStr;
  };

  return (
    <AppContext.Provider
      value={{ data, language, updateLanguage, getTranslated, splitStr }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default IntlProvider;
