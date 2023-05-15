import logo from './logo.svg';
import Button from 'react-bootstrap/Button';
import { Route,Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={<h1>Úvod</h1>}/>
      <Route path='/kontakt' element={<h1>Kontakt</h1>}/>
      <Route path='/technologie' element={<h1>technologie</h1>}/>
      <Route path='/reference' element={<h1>Reference</h1>}/>
      <Route path='/fotografie' element={<h1>Fotogalerie</h1>}/>
      <Route path='*' element={<h1>Page not found</h1>}/>
    </Routes>
  );
}

export default App;
