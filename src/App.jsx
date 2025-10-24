import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import NewsGrid from "./components/NewsGrid";
import "./App.css";


function ConcursosPublicos() {
  return (
    <div  className="TituloDosConcursos">
      <h1>Notícias sobre concursos públicos:</h1>
    </div>
  );
}

function Empregos() {
  return <h1>Empregos</h1>;
}

function Regioes() {
  return <h1>Regiões</h1>;
}

function App() {
  return (
    <div className="app">
      <Header />
      <main className="content-area">
        <Routes>
          <Route path="/" element={<NewsGrid />} />
          <Route path="/concursos-publicos" element={<ConcursosPublicos />} />
          <Route path="/empregos" element={<Empregos />} />
          <Route path="/regioes" element={<Regioes />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
