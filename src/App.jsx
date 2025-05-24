import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import QuoteForm from "./components/Form/QuoteForm";
import HomePage from "./pages/Homepage/HomePage";
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
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          <QuoteForm />
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
