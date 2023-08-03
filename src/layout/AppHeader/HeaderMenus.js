import { useContext } from "react";
import { AppContext } from "common/IntlProvider";
import ContactBtn from "common/ContactBtn";

// import { languages } from "assets/data";

const LanguageSwitcher = () => {
  const { language, updateLanguage } = useContext(AppContext);

  return (
    <button type="button" className="btn" onClick={updateLanguage}>
      {language}
    </button>
  );
};

const HeaderMenus = () => {
  return (
    <div className="header-menus">
      {/* <LanguageSwitcher /> */}
      <ContactBtn />
    </div>
  );
};

export default HeaderMenus;
