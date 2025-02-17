import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { NavBar } from "./components/NavBar";
import PricingPage from "./pages/PricingPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";
import { ProfileCard } from "./components/ProfileCard";
import { ContactCard } from "./components/ContactCard";
import SamplesPage from "./pages/SamplesPage"
// import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full min-h-screen overflow-hidden">
      {/* Fixed header */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto flex flex-row sm:flex-row items-center justify-center gap-6 sm:gap-x-16 p-4 relative">
          {/* ProfileCard positioned to the left (centered on mobile) */}
          <div className="sm:absolute sm:left-0">
            <Link to="/">
              <ProfileCard />
            </Link>
          </div>

          {/* Centered NavBar */}
          <div className="flex justify-center">
            <NavBar />
          </div>

          {/* ContactCard positioned to the right (centered on mobile) */}
          <div className="sm:absolute sm:right-0">
            <Link to="/contact">
              <ContactCard />
            </Link>
          </div>
        </div>
      </header>


      {/* Main content with top padding to avoid being hidden under the fixed header */}
      <main className="">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/samples" element={<SamplesPage />} />
        </Routes>
        {/* <Footer /> */}
      </main>
    </div>
  );
}

export default App;
