import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <main>
          <Hero />
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
