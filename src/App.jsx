import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Hero from "./components/Hero/Hero";
import "./App.scss";

function App() {
  const [isMenuPanelOpen, setIsMenuPanelOpen] = useState(false);
  const handleTogglePanel = () => {
    setIsMenuPanelOpen((prev) => !prev);
  };
  return (
    <>
      <BrowserRouter>
        <Header
          isMenuPanelOpen={isMenuPanelOpen}
          handleTogglePanel={handleTogglePanel}
        />
        <main>
          {isMenuPanelOpen && <Menu />}
          <Hero />
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
