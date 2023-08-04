import './index.css';
import { useContext } from 'react';
import { AppContext } from 'AppContext';

const LanguageSwitcher = () => {
  const { languages, language, setLanguage } = useContext(AppContext);

  return (
    <div className="language-switcher select">
      <a className="select-value">
        <div>{language}</div>
      </a>

      <div className="select-content">
        {languages.map((lang) => {
          return (
            <button key={lang} onClick={() => setLanguage(lang)}>
              {lang}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
