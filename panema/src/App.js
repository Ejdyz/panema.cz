import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import { MainPage } from './Pages/MainPage'
import { ContactPage } from './Pages/ContactPage'
import { TechnologyPage } from './Pages/TechnologyPage'
import { ReferencesPage } from './Pages/ReferencesPage'
import { FotographyPage } from './Pages/FotographyPage'

import { DownloadPage } from './Pages/DownloadPage'

import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/kontakt' element={<ContactPage />} />
        <Route path='/technologie' element={<TechnologyPage />} />
        <Route path='/reference' element={<ReferencesPage />} />
        <Route path='/fotografie' element={<FotographyPage />} />
        <Route path='/kestazeni' element={<DownloadPage />} />
        <Route path='*' element={<MainPage />} />
      </Routes>
    </>
  );
}

export default App;
