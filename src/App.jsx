import React from "react";
import "./App.css";
import Header from "./components/header";
import NewsGrid from "./components/NewsGrid";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <NewsGrid />
      </main>
    </div>
  );
}

export default App;
