import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import LandingPage from "../pages/LandingPage";
import HomePage from "../pages/HomePage";
import PromptWorkspacePage from "../pages/PromptWorkspacePage";
import SavedResumesPage from "../pages/SavedResumesPage";
import TemplatesPage from "../pages/TemplatesPage";
import SettingsPage from "../pages/SettingsPage";
import AuthenticationPage from "../pages/AuthenticationPage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<AuthenticationPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/prompt-workspace" element={<PromptWorkspacePage />} />
        <Route path="/saved" element={<SavedResumesPage />} />
        <Route path="/templates" element={<TemplatesPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
