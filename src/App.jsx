import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Background from "./Components/Background";
import PageTransition from "./Components/PageTransition";
import ErrorBoundary from "./Components/ErrorBoundary";

function AppRouter() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route index element={<PageTransition><Home /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Background>
      <ErrorBoundary>
        {/* 👇 FIX: Required for GitHub Pages */}
        <BrowserRouter basename="/portfolio7">
          <AppRouter />
        </BrowserRouter>
      </ErrorBoundary>
    </Background>
  );
}

export default App;
