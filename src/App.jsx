import { useState } from "react";
import { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import QuoteForm from "./components/Form/QuoteForm";
import HomePage from "./pages/Homepage/HomePage";
import BannerImage from "./components/BannerImage/BannerImage";
import "./App.scss";

function App() {
  const [isMenuPanelOpen, setIsMenuPanelOpen] = useState(false);
  const handleTogglePanel = () => {
    setIsMenuPanelOpen((prev) => !prev);
  };

  const formRef = useRef(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <BrowserRouter>
        <Header
          isMenuPanelOpen={isMenuPanelOpen}
          handleTogglePanel={handleTogglePanel}
          onGetQuoteClick={scrollToForm}
        />
        <main>
          {isMenuPanelOpen && <Menu />}
          <Routes>
            <Route
              path="/"
              element={<HomePage onGetQuoteClick={scrollToForm} />}
            />
          </Routes>
          <QuoteForm ref={formRef} />
          <BannerImage />
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
