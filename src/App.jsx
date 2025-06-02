import { useState } from "react";
import { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import QuoteForm from "./components/QuoteForm/QuoteForm";
import HomePage from "./pages/Homepage/HomePage";
import CommercialLawnCarePage from "./pages/CommercialLawnCarePage/CommercialLawnCarePage";
import CommercialLandscapingPage from "./pages/CommercialLandscapingPage/CommercialLandscapingPage";
import CommercialRenoPage from "./pages/CommercialRenoPage/CommercialRenoPage";
import CommercialSeasonalCarePage from "./pages/CommercialSeasonalCarePage/CommercialSeasonalCarePage";
import CommercialSnowRemoval from "./pages/CommercialSnowRemoval/CommercialSnowRemoval";
import ResidentialLawnCarePage from "./pages/ResidentialLawnCarePage/ResidentialLawnCarePage";
import ResidentialSpringCleanPage from "./pages/ResidentialSpringCleanPage/ResidentialSpringCleanPage";
import ResidentialFallCleanPage from "./pages/ResidentialFallCleanPage/ResidentialFallCleanPage";
import ResidentialLandscapingPage from "./pages/ResidentialLandscapingPage/ResidentialLandscapingPage";
import ResidentialRenoPage from "./pages/ResidentialRenoPage/ResidentialRenoPage";
import ResidentialSnowRemoval from "./pages/ResidentialSnowRemoval/ResidentialSnowRemoval";
import BannerImage from "./components/BannerImage/BannerImage";
import Footer from "./components/Footer/Footer";
import "./App.scss";

function App() {
  const [isMenuPanelOpen, setIsMenuPanelOpen] = useState(false);
  const handleTogglePanel = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
          {isMenuPanelOpen && <Menu handleTogglePanel={handleTogglePanel} />}
          <Routes>
            <Route
              path="/"
              element={<HomePage onGetQuoteClick={scrollToForm} />}
            />

            {/* Commercial Services */}
            <Route
              path="/commercial-lawn-care"
              element={
                <CommercialLawnCarePage onGetQuoteClick={scrollToForm} />
              }
            />
            <Route
              path="/commercial-landscaping-design"
              element={
                <CommercialLandscapingPage onGetQuoteClick={scrollToForm} />
              }
            />
            <Route
              path="/commercial-property-renovation"
              element={<CommercialRenoPage onGetQuoteClick={scrollToForm} />}
            />
            <Route
              path="/commercial-snow-removal"
              element={<CommercialSnowRemoval onGetQuoteClick={scrollToForm} />}
            />
            <Route
              path="/commercial-seasonal-maintenance"
              element={
                <CommercialSeasonalCarePage onGetQuoteClick={scrollToForm} />
              }
            />

            {/* Residential Services */}
            <Route
              path="/residential-lawn-care"
              element={
                <ResidentialLawnCarePage onGetQuoteClick={scrollToForm} />
              }
            />
            <Route
              path="/residential-spring-cleanup"
              element={
                <ResidentialSpringCleanPage onGetQuoteClick={scrollToForm} />
              }
            />
            <Route
              path="/residential-fall-cleanup"
              element={
                <ResidentialFallCleanPage onGetQuoteClick={scrollToForm} />
              }
            />
            <Route
              path="/residential-landscaping-design"
              element={
                <ResidentialLandscapingPage onGetQuoteClick={scrollToForm} />
              }
            />
            <Route
              path="/residential-property-renovation"
              element={<ResidentialRenoPage onGetQuoteClick={scrollToForm} />}
            />
            <Route
              path="/residential-snow-removal"
              element={
                <ResidentialSnowRemoval onGetQuoteClick={scrollToForm} />
              }
            />
          </Routes>
          <QuoteForm ref={formRef} />
          <BannerImage />
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
