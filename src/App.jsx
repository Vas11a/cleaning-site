import React from 'react';
import MainPage from './modules/Main';
import { Route, Routes } from 'react-router-dom';
import Privacy from './Privacy';
import Contract from './Contract';
import UserAgreement from './UserAgreemed';
import CatalogMain from './modules/catalog/CatalogMain';
import { catalog_kharkov } from './data/catalog_kharkov';
import { catalog_kyiv } from './data/catalog_kyiv';
import { Helmet } from 'react-helmet'; 

function App() {
  React.useEffect(() => {
    document.title = 'Ad Clavum - клінінгова компанія преміум класу';
  }, []);
  return (
    <div className="wrapper">
      <Helmet>
        <title>Ad Clavum - клінінгова компанія преміум класу</title>
        <meta name="description" content="Наша клінінгова компанія професійно виконує послуги з прибирання у Харкові та Києві.Гарантуємо високу якість та надійність." />
        <meta name="keywords" content="Ad Clavum, services, quality, professional" />
        <meta property="og:title" content="Ad Clavum - клінінгова компанія преміум класу" />
        <meta property="og:site_name" content="Ad Clavum - клінінгова компанія преміум класу" />

        <meta property="og:description" content="Наша клінінгова компанія професійно виконує послуги з прибирання у Харкові та Києві.Гарантуємо високу якість та надійність." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/user-agreement" element={<UserAgreement />} />
        <Route path="/contract" element={<Contract />} />
        <Route path="/catalog/kyiv" element={<CatalogMain data={catalog_kyiv} />} />
        <Route path="/catalog/kharkov" element={<CatalogMain data={catalog_kharkov} />} />
      </Routes>
    </div>
  );
}

export default App;
