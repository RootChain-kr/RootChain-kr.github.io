import './index.css';
import { useContext } from 'react';
import { AppContext } from 'AppContext';

const LanguageSwitcher = () => {
  const { languages, language, setLanguage } = useContext(AppContext);

  return (
    <div className="dropdown language-switcher">
      <button className="btn btn-black">
        <div>{language}</div>
      </button>

      <div className="dropdown-content">
        {languages.map((lang) => {
          return (
            <a key={lang}>
              <button onClick={() => setLanguage(lang)}>{lang}</button>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
