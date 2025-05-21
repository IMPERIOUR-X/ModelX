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
import ForgottenPasswordPage from "../pages/ForgottenPasswordPage";
import ErrorPage from "../pages/ErrorPage";

// Route Wrappers
import RequireAuth from "./RequireAuth";
import RedirectIfAuthenticated from "./RedirectIfAuthenticated";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route
          path="/auth"
          element={
            <RedirectIfAuthenticated>
              <AuthenticationPage />
            </RedirectIfAuthenticated>
          }
        />

        <Route
          path="/forgotten-password"
          element={
            <RedirectIfAuthenticated>
              <ForgottenPasswordPage />
            </RedirectIfAuthenticated>
          }
        />

        {/* ✅ Protected Routes */}
        <Route
          path="/home"
          element={
            <RequireAuth>
              <HomePage />
            </RequireAuth>
          }
        />

        <Route
          path="/:resumeId/prompt-workspace"
          element={
            <RequireAuth>
              <PromptWorkspacePage />
            </RequireAuth>
          }
        />

        <Route
          path="/saved"
          element={
            <RequireAuth>
              <SavedResumesPage />
            </RequireAuth>
          }
        />

        <Route
          path="/templates"
          element={
            <RequireAuth>
              <TemplatesPage />
            </RequireAuth>
          }
        />

        <Route
          path="/settings"
          element={
            <RequireAuth>
              <SettingsPage />
            </RequireAuth>
          }
        />

        {/* Catch-all route */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
