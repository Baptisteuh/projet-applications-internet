import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './base/components/header';
import Amalgame from './base/pages/amalgame';
import Wiki from './base/pages/wiki';
import Shop from './base/pages/shop';
import Infos from './base/pages/infos';
import WikiItem from './base/pages/wikiitem';

function App() {
  if (localStorage.getItem('background1') === null) {
    localStorage.setItem('background1', 'equip');
  }
  let i = 1;
  for (i; i <= 11; i++) {
    if (localStorage.getItem("background" + i) == 'equip') {
      if (i != 1) {
        document.body.style.background = `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(${require(`./assets/images/background${i}.png`)})`;
      } else {
        document.body.style.background = `url(${require(`./assets/images/background${i}.png`)})`;
      }
    }

  if (localStorage.getItem('rupeeBalance') === null) {
    localStorage.setItem('rupeeBalance', 100);
  }
}
  
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Amalgame />}></Route>
          <Route path="/wiki" element={<Wiki />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/infos" element={<Infos />}></Route>
          <Route path="/wiki/:id" element={<WikiItem />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;