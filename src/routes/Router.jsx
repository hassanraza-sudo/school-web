import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePage from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
import AdmissionPage from "../pages/AdmissionPage";
import PagenotFound from "../pages/404";
import EventsPage from "../pages/EventsPage";
import ContactPage from "../pages/ContactPage";

const AppRoutes = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<PagenotFound />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/admissions" element={<AdmissionPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRoutes;
