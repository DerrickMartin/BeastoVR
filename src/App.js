import './App.css';

//Browser Router v6.4
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Worlds from "./pages/Worlds";
import Clothing from "./pages/Clothing";
import Avatars from "./pages/Avatars";
import NoPage from "./pages/NoPage";
//install soon

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="worlds" element={<Worlds />} />
          <Route path="clothing" element={<Clothing />} />
          <Route path="avatars" element={<Avatars />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
   </BrowserRouter>
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

