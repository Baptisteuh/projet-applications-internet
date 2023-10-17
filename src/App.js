import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './base/components/header';
import Amalgame from './base/pages/amalgame';
import Wiki from './base/pages/wiki';
import Shop from './base/pages/shop';
import Infos from './base/pages/infos';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Amalgame />}></Route>
          <Route path="/wiki" element={<Wiki />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/infos" element={<Infos />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;