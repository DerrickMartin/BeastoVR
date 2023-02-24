
import './App.css';

//Browser Router v6.4
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Worlds from "./pages/Worlds";
import Clothing from "./pages/Clothing";
import NoPage from "./pages/NoPage";
//install soon

import './styles/globalstyles.css';




function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="worlds" element={<Worlds />} />
          <Route path="clothing" element={<Clothing />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
   </BrowserRouter>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


/*      
import logo from './logo.svg';

Default image
<img src={logo} className="App-logo" alt="logo" />

Css styling (default)
@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}
@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

*/
