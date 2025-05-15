import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <h1>Pall Lawn mowers and renovations</h1>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
