import './index.css';
import ProductLogo from 'layout/AppHeader/ProductLogo';
import Navigator from 'layout/AppHeader/Navigator';
import LanguageSwitcher from 'layout/AppHeader/LanguageSwitcher';
import ContactBtn from 'components/ContactBtn';

const AppHeader = () => {
  return (
    <header className="App-header">
      <div className="container">
        <ProductLogo />
        <Navigator />
        <LanguageSwitcher />
        <ContactBtn />
      </div>
    </header>
  );
};

export default AppHeader;
