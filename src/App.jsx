import React from 'react'
import MainPage from './modules/Main';
import { Route, Routes } from 'react-router-dom'
import Privacy from './Privacy';
import Contract from './Contract';
import UserAgreement from './UserAgreemed';
import CatalogMain from './modules/catalog/CatalogMain';
import { catalog_kharkov } from './data/catalog_kharkov';
import { catalog_kyiv } from './data/catalog_kyiv';

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/user-agreement" element={< UserAgreement/>} />
        <Route path="/contract" element={< Contract/>} />

        <Route path="/catalog/kyiv" element={<CatalogMain data={catalog_kyiv} />} />
        {/* <Route path="/catalog/kharkov" element={<CatalogMain data={catalog_kharkov} />} /> */}
      </Routes>

    </div>
  );
}

export default App;
